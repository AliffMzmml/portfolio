import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export function AboutMe() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<number>(0);

  const skills: Skill[] = [
    { name: 'User Research', level: 95, category: 'Research' },
    { name: 'Wireframing', level: 90, category: 'Design' },
    { name: 'Prototyping', level: 92, category: 'Design' },
    { name: 'Figma', level: 95, category: 'Tools' },
    { name: 'UI Design', level: 93, category: 'Design' },
    { name: 'UX Strategy', level: 88, category: 'Strategy' },
    { name: 'Usability Testing', level: 90, category: 'Research' },
    { name: 'Adobe XD', level: 85, category: 'Tools' },
  ];

  useEffect(() => {
    if (activeSection === 'skills') {
      const timer = setInterval(() => {
        setVisibleSkills((prev) => {
          if (prev < skills.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 100);
      return () => clearInterval(timer);
    } else {
      setVisibleSkills(0);
    }
  }, [activeSection, skills.length]);

  return (
    <div className="content-stretch flex flex-col items-center min-h-screen p-[60px] relative w-full">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-width);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .skill-bar {
          animation: slideIn 1s ease-out forwards;
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .section-card {
          backdrop-filter: blur(1.5px);
          background: rgba(255, 255, 255, 0.12);
          border: 1.2px solid rgba(255, 255, 255, 0.52);
          transition: all 0.3s ease;
        }

        .section-card:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-4px);
          box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.15);
        }

        .section-card.active {
          background: rgba(255, 255, 255, 0.22);
          box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* Header Name Section */}
      <div className="fade-in-up mb-[80px] text-center" style={{ animationDelay: '0.1s' }}>
        <h1 className=" font-bold text-[#1d1d1f] text-[80px] leading-[1.1] mb-[20px]">
          ALIFF MZMML
        </h1>
        <div className="flex gap-[16px] items-center justify-center">
          <div className="h-[46px] px-[24px] py-[12px] rounded-[32px] section-card">
            <p className=" font-bold text-[#1d1d1f] text-[15px] leading-[22px]">
              UI/UX DESIGNER
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-[40px] max-w-[1320px] w-full">
        
        {/* Biography Card */}
        <div
          className={`section-card rounded-[24px] p-[40px] cursor-pointer ${
            activeSection === 'biography' ? 'active' : ''
          }`}
          onClick={() => setActiveSection(activeSection === 'biography' ? null : 'biography')}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-[16px] mb-[24px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#1d1d1f] float" />
            <h2 className=" font-semibold text-[#1d1d1f] text-[32px] leading-[1.2]">
              Biography
            </h2>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'biography' ? 'max-h-[800px] opacity-100' : 'max-h-[200px] opacity-70'}`}>
            <p className=" font-light text-[#1d1d1f] text-[16px] leading-[26px] mb-[16px]">
              With a background in New Media Communications and a self-driven journey into UI/UX design, 
              I bring a unique perspective to every project. My approach combines rigorous user research 
              with creative problem-solving to craft experiences that truly resonate with users.
            </p>
            {activeSection === 'biography' && (
              <>
                <p className=" font-light text-[#1d1d1f] text-[16px] leading-[26px] mb-[16px]">
                  I believe great design is invisible—it simply works. My passion lies in understanding 
                  the 'why' behind user behaviors and translating those insights into interfaces that 
                  feel effortless and intuitive.
                </p>
                <p className=" font-light text-[#1d1d1f] text-[16px] leading-[26px]">
                  When I'm not designing, you'll find me exploring the latest design trends, conducting 
                  guerrilla usability tests, or collaborating with developers to bring pixel-perfect 
                  designs to life.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Education Card */}
        <div
          className={`section-card rounded-[24px] p-[40px] cursor-pointer ${
            activeSection === 'education' ? 'active' : ''
          }`}
          onClick={() => setActiveSection(activeSection === 'education' ? null : 'education')}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex items-center gap-[16px] mb-[24px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#1d1d1f] float" style={{ animationDelay: '0.5s' }} />
            <h2 className=" font-semibold text-[#1d1d1f] text-[32px] leading-[1.2]">
              Education
            </h2>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'education' ? 'max-h-[800px] opacity-100' : 'max-h-[200px] opacity-70'}`}>
            <div className="mb-[24px]">
              <h3 className=" font-semibold text-[#1d1d1f] text-[20px] leading-[1.3] mb-[8px]">
                Bachelor of New Media Communications
              </h3>
              <p className=" text-[#1d1d1f] text-[15px] leading-[22px] mb-[4px]">
                UiTM Shah Alam
              </p>
              <p className=" font-light text-[rgba(29,29,31,0.7)] text-[14px] leading-[20px]">
                2019 - 2023
              </p>
            </div>
            {activeSection === 'education' && (
              <>
                <div className="mb-[24px]">
                  <h3 className=" font-semibold text-[#1d1d1f] text-[20px] leading-[1.3] mb-[8px]">
                    UI/UX Design Certification
                  </h3>
                  <p className=" text-[#1d1d1f] text-[15px] leading-[22px] mb-[4px]">
                    Self-Taught & Online Courses
                  </p>
                  <p className=" font-light text-[rgba(29,29,31,0.7)] text-[14px] leading-[20px]">
                    2022 - Present
                  </p>
                </div>
                <div className="pt-[16px] border-t border-[rgba(29,29,31,0.2)]">
                  <p className=" font-light text-[#1d1d1f] text-[15px] leading-[24px]">
                    Focused on human-centered design, interaction design principles, and user research methodologies.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Skills Card - Full Width */}
        <div
          className={`col-span-2 section-card rounded-[24px] p-[40px] cursor-pointer ${
            activeSection === 'skills' ? 'active' : ''
          }`}
          onClick={() => setActiveSection(activeSection === 'skills' ? null : 'skills')}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center gap-[16px] mb-[32px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#1d1d1f] float" style={{ animationDelay: '1s' }} />
            <h2 className=" font-semibold text-[#1d1d1f] text-[32px] leading-[1.2]">
              Skills & Expertise
            </h2>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'skills' ? 'max-h-[1000px] opacity-100' : 'max-h-[100px] opacity-70'}`}>
            <div className="grid grid-cols-2 gap-[24px]">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-300 ${
                    index < visibleSkills ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-[8px]">
                    <span className=" font-semibold text-[#1d1d1f] text-[15px]">
                      {skill.name}
                    </span>
                    <span className=" text-[rgba(29,29,31,0.6)] text-[13px]">
                      {skill.category}
                    </span>
                  </div>
                  <div className="h-[8px] bg-[rgba(29,29,31,0.1)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1d1d1f] rounded-full skill-bar"
                      style={{
                        '--skill-width': `${skill.level}%`,
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
            {activeSection === 'skills' && (
              <div className="mt-[32px] pt-[24px] border-t border-[rgba(29,29,31,0.2)]">
                <p className=" font-light text-[#1d1d1f] text-[15px] leading-[24px] text-center">
                  Constantly learning and evolving with the latest design tools and methodologies to deliver exceptional user experiences.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Hint */}
      <div className="mt-[60px] fade-in-up" style={{ animationDelay: '0.5s' }}>
        <p className=" font-light text-[rgba(29,29,31,0.6)] text-[14px] text-center">
          Click on any section to explore more
        </p>
      </div>
    </div>
  );
}
