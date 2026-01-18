import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// About Me Section Component with new design from Figma
export function AboutMeSection() {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  return (
    <div id="about-me-section" className="content-stretch flex flex-col items-start p-[20px] md:p-[60px] relative w-full">
      <div className="relative rounded-[32px] shrink-0 w-full max-w-[1320px] mx-auto" data-name="btn">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[20px] md:p-[60px] relative rounded-[inherit] w-full">
          {/* Liquid Effect */}
          <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.12)] inset-[-6.5px_-21px]" data-name="liquid-effect" />

          {/* Main Content */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full">

            {/* Top Section - Biography and Education */}
            <div className="content-stretch flex flex-col lg:flex-row items-center lg:items-start justify-between relative shrink-0 w-full gap-[40px] lg:gap-0">

              {/* Left Side - Biography */}
              <div className="content-stretch flex flex-col gap-[40px] items-start relative rounded-[16px] shrink-0 w-full lg:w-auto lg:max-w-[70%]">
                {/* WHO IS ALIFF? Header */}
                <div className="content-stretch flex gap-[16px] h-auto lg:h-[160px] items-center relative shrink-0 w-full lg:w-[357px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-bold leading-[normal] relative shrink-0 text-[#fafafa] text-[40px] md:text-[64px] w-full lg:w-[233px]">WHO IS ALIFF</p>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[80px] md:w-[108px]">
                    <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[120px] md:text-[180px] w-full">
                      <p className="css-4hzbpn leading-[normal]">?</p>
                    </div>
                  </div>
                </div>

                {/* Biography Text */}
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <div className="font-light leading-[22px] relative shrink-0 text-[#fafafa] text-[15px] text-justify w-full lg:w-[809px]">
                    <p className="css-4hzbpn mb-0">Who am I? I fell in love with storytelling long before I knew what UI/UX was. It started with photography, an attempt to translate my emotions into images, to make people feel something without saying a word. I watched films not to escape, but to study: how does this scene make me feel? Why did that cut hit so hard? I applied those lessons to my own photographs, treating every shot like a frame in a story.</p>
                    <p className="css-4hzbpn mb-0">&nbsp;</p>
                    <p className="css-4hzbpn">{`But over time, my focus shifted. I stopped asking how can I express myself? and started asking how can I understand others? That question led me to UI/UX design. Now I channel the same obsession into research and interfaces, building things that aren't about me, but about the people who use them. I welcome feedback because it teaches me. And I believe, deeply, that effort carves the path. If I keep going, I'll get there.`}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Education */}
              <div className="flex-none lg:flex-[1_0_0] h-auto min-h-px min-w-px relative rounded-[16px] w-full lg:w-auto">
                <div className="content-stretch flex flex-col gap-[40px] items-start lg:pl-[80px] lg:pr-[40px] py-0 relative size-full text-[#fafafa]">
                  <p className="css-4hzbpn font-bold leading-[normal] relative shrink-0 text-[32px] w-full">EDUCATION</p>

                  <div className="content-stretch flex flex-[1_0_0] flex-col font-light items-center justify-between leading-[0] min-h-px min-w-px relative text-[15px] text-justify w-full gap-[20px] lg:gap-0">
                    {/* Bachelor */}
                    <div className="relative shrink-0 w-full">
                      <p className="css-4hzbpn font-semibold leading-[22px] mb-0">Bachelor of New Media Communication (Hons.)</p>
                      <p className="css-4hzbpn leading-[22px] mb-0">Universiti Teknologi MARA (UiTM) Shah Alam</p>
                      <ul>
                        <li className="css-4hzbpn list-disc ms-[22.5px]">
                          <span className="leading-[22px]">{`Multiple Dean's List honors throughout degree studies`}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Udemy */}
                    <div className="relative shrink-0 w-full">
                      <p className="css-4hzbpn font-semibold leading-[22px] mb-0">Udemy Certification</p>
                      <ul>
                        <li className="css-4hzbpn list-disc ms-[22.5px]">
                          <span className="leading-[22px]">{`Complete Web & Mobile Designer: UI/UX, Figma`}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Diploma */}
                    <div className="relative shrink-0 w-full">
                      <p className="css-4hzbpn font-semibold leading-[22px] mb-0">Diploma in New Media Communication</p>
                      <p className="css-4hzbpn leading-[22px] mb-0">Universiti Teknologi MARA (UiTM) Alor Gajah</p>
                      <ul>
                        <li className="css-4hzbpn list-disc ms-[22.5px]">
                          <span className="leading-[22px]">{`Vice Chancellor's Award recipient for exceptional academic performance`}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Expertise Section */}
            <div className="content-stretch flex flex-col gap-[32px] items-start relative rounded-[24px] shrink-0 w-full">
              {/* Header */}
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
              >
                <p className="css-ew64yg  font-bold leading-[38.4px] relative shrink-0 text-[#fafafa] text-[32px]">{`SKILLS & EXPERTISE`}</p>
                <div className="flex items-center justify-center relative shrink-0">
                  <motion.div
                    className="flex-none"
                    animate={{ rotate: isSkillsExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d="M6 9L12 15L18 9" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Skills Grid */}
              <motion.div
                initial={false}
                animate={{ height: isSkillsExpanded ? "auto" : 0, opacity: isSkillsExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="content-stretch flex flex-col gap-[32px] items-start overflow-hidden relative shrink-0 w-full"
              >
                <div className="gap-[24px] grid grid-cols-1 md:grid-cols-2 h-auto relative shrink-0 w-full">

                  {/* User Research */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">User Research</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Research</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[20%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wireframing */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">Wireframing</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[35%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prototyping */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">Prototyping</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[25%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Figma */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">Figma</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[15%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UI Design */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">UI Design</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[22%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UX Strategy */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">UX Strategy</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Strategy</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[40%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Usability Testing */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">Usability Testing</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Research</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[30%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Adobe XD */}
                  <div className="content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full">
                      <div className="h-[22.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-semibold leading-[22.5px] text-[#fafafa] text-[15px]">Adobe XD</p>
                        </div>
                      </div>
                      <div className="h-[19.5px] relative shrink-0 w-auto">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="css-ew64yg font-normal leading-[19.5px] text-[13px] text-[rgba(250,250,250,0.6)]">Tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start pr-[45%] py-0 relative size-full">
                          <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Text */}
                <div className="content-stretch flex flex-col h-auto items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[rgba(29,29,31,0.2)] border-solid border-t inset-0 pointer-events-none" />
                  <div className="h-auto relative shrink-0 w-full text-center">
                    <p className="css-ew64yg font-light leading-[24px] text-[#fafafa] text-[15px]">Constantly learning and evolving with the latest design tools and methodologies to deliver exceptional user experiences.</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0.52)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.12)]" />
      </div>
    </div >
  );
}