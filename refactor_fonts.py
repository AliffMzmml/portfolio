
import os
import re

def refactor_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Regex to match the font arbitrary value class
    # Matches font-['Google_Sans_Code...',sans-serif]
    # We want to remove it.
    
    pattern = r"font-\['Google_Sans_Code[^']*',sans-serif\]"
    
    new_content = re.sub(pattern, "", content)
    
    # Clean up double spaces that might result
    new_content = re.sub(r'\s+', ' ', new_content) # This is dangerous, it might mess up other strings
    
    # Better approach for cleanup:
    # Just replace with empty string, then maybe fix double spaces in className? 
    # But regex replace on content is safer if we just target the classname part.
    # However, doing re.sub on the whole file for that specific string is relatively safe.
    # But let's be careful about not deleting necessary spaces.
    
    # Let's try to just remove the class.
    # If it's `className="foo font-[...] bar"`, removing it gives `className="foo  bar"`.
    # Browser handles multiple spaces fine.
    
    new_content = re.sub(pattern, "", content)

    if content != new_content:
        # print(f"Refactoring {filepath}")
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True
    return False

def main():
    root_dir = "/Users/aliffmzmml/Desktop/PORTFOLIO/src"
    count = 0
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".jsx"):
                filepath = os.path.join(subdir, file)
                if refactor_file(filepath):
                    count += 1
    print(f"Refactored {count} files.")

if __name__ == "__main__":
    main()
