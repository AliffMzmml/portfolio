
import os
import glob
from PIL import Image

def optimize_images():
    assets_dir = "/Users/aliffmzmml/Desktop/PORTFOLIO/src/assets"
    src_dir = "/Users/aliffmzmml/Desktop/PORTFOLIO/src"
    
    # Track conversions to update code references
    conversions = {}
    
    # 1. Convert PNGs to WebP
    for filepath in glob.glob(os.path.join(assets_dir, "*.png")):
        filename = os.path.basename(filepath)
        filename_no_ext = os.path.splitext(filename)[0]
        webp_path = os.path.join(assets_dir, f"{filename_no_ext}.webp")
        
        print(f"Converting {filename} to WebP...")
        try:
            with Image.open(filepath) as img:
                img.save(webp_path, "WEBP", quality=80)
            
            conversions[filename] = f"{filename_no_ext}.webp"
            
            # Optionally remove original if conversion successful
            # os.remove(filepath) 
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

    # 2. Update Code References
    if not conversions:
        print("No images converted.")
        return

    print("Updating code references...")
    for subdir, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".css"):
                filepath = os.path.join(subdir, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                new_content = content
                for original, new in conversions.items():
                    # Replace imports/references
                    if original in new_content:
                        print(f"Updating reference in {file}: {original} -> {new}")
                        new_content = new_content.replace(original, new)
                
                if content != new_content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)

if __name__ == "__main__":
    optimize_images()
