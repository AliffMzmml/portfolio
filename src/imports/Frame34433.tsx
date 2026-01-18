import imgAliff2 from "../assets/aliff2.webp";
import imgRectangle3403 from "../assets/f18628794bce50a197d27b19df5a13f0887e9e6a.webp";
import imgRectangle3404 from "../assets/24aad8eceb14b95513aa22cc620e658fabcca300.webp";
import imgRectangle3405 from "../assets/f3155a5bd628bb85cc9ad151a6cad85395bd48a8.webp";
import imgRectangle3406 from "../assets/ea809d0b6ca1fc3002485ecaab5da01ae9f2243a.webp";
import imgRectangle3407 from "../assets/bbe194600637ad67f8b79fd9ad6a15d213e4f1a5.webp";
import imgRectangle3408 from "../assets/5d78c5a15c3f8f0e4cb704fec7a882556c90d19a.webp";
import imgRectangle3409 from "../assets/ef90d3798c6a40a6dab9136e66d5ac7cdcc26c06.webp";
import imgRectangle3410 from "../assets/e1d0d23b0d989981c1b76863f74a3fb2e449aa30.webp";

import { imgFrame34427 } from "./svg-segvn";
import { useEffect, useRef, useState } from "react";
import { AboutMeSection } from "./AboutMeSection";

// --- Interfaces ---
interface ScrollItemProps {
  imageSrc: string;
  link?: string;
  customImageStyle?: string; // For that specific adjustment in Btn5 if needed, or we standardize
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  isExternal?: boolean;
}

// --- Reusable Components ---

function LiquidEffect({ className = "" }: { className?: string }) {
  return <div className={`absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.12)] ${className}`} data-name="liquid-effect" />;
}

function ScrollItem({ imageSrc, link = "https://aliffmzmml.myportfolio.com/portfolio", customImageStyle }: ScrollItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-[16px] shrink-0 transition-transform duration-300 hover:scale-105 will-change-transform cursor-pointer"
      data-name="btn"
    >
      <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip p-[4px] relative rounded-[inherit]">
        <LiquidEffect className="h-[179px] left-[-21px] right-[-21px] top-1/2 translate-y-[-50%]" />
        <div className="h-[150px] relative rounded-[12px] shrink-0 w-[200px]">
          <img
            loading="lazy"
            alt="Project Preview"
            className={`absolute inset-0 max-w-none object-cover opacity-90 pointer-events-none rounded-[12px] size-full transition-opacity duration-300 hover:opacity-100 ${customImageStyle || ''}`}
            src={imageSrc}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0.52)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0px_16px_24px_0px_rgba(0,0,0,0.2)]" />
    </a>
  );
}

function ProjectCard({ title, description, imageSrc, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-center p-[16px] relative rounded-[16px] shrink-0 w-[413px] transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      style={{
        background: '#fafafa',
        border: '1px solid rgba(250, 250, 250, 0.1)'
      }}
    >
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative">
        <div className="h-[300px] pointer-events-none relative rounded-[8px] shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img loading="lazy" alt={title} className="absolute inset-0 w-full h-full object-cover" src={imageSrc} />
          </div>
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_-1px_rgba(12,12,13,0.05)]" />
        </div>

        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#1d1d1f] w-full">
          <p className="css-4hzbpn  font-semibold leading-[normal] relative shrink-0 text-[20px] w-full">{title}</p>
          <p className="css-4hzbpn  font-light leading-[22px] relative shrink-0 text-[15px] text-justify w-full line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

// Custom cursor component
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: '0px',
          top: '0px',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'white',
          mixBlendMode: 'difference',
          willChange: 'left, top',
        }}
      />
    </>
  );
}

function Btn() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-me-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content-stretch flex  font-normal gap-[40px] h-[46px] items-center justify-center leading-[22px] overflow-clip px-[16px] py-[12px] relative rounded-[32px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="btn">
      <button className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-inherit font-inherit" onClick={scrollToAbout}>About Me</button>
      <button className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-inherit font-inherit" onClick={scrollToProjects}>Projects</button>
      <button className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-inherit font-inherit" onClick={scrollToContact}>Contact</button>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#1d1d1f] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex justify-between items-center px-[60px] py-[12px] relative text-[#d8d7d7] text-[15px] w-full">
          <p className="css-ew64yg font-['Akira_Expanded:Super_Bold',sans-serif] leading-[0] not-italic relative shrink-0">
            <span className="leading-[22px]">{`ALIFF `}</span>
            <span className=" font-light leading-[22px]">|</span>
            <span className="leading-[22px]"> </span>
            <span className=" font-light leading-[22px] text-[rgba(216,215,215,0.5)]">MZMML</span>
          </p>
          <Btn />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 px-[20px] md:px-[60px] py-[10px] top-[69px] translate-x-[-50%] w-full max-w-[1440px]">
      <div className="css-g0mm18 flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#1d1d1f] text-[60px] md:text-[100px] lg:text-[185.395px]">
        <p className="css-ew64yg leading-[normal]">{`ALIFF  MZMML`}</p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="h-[46px] relative rounded-[32px] shrink-0" data-name="btn">
      <div className="content-stretch flex gap-[40px] h-full items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <LiquidEffect className="inset-[-6.5px_-21px]" />
        <p className="css-ew64yg  font-bold leading-[22px] relative shrink-0 text-[#1d1d1f] text-[15px] z-10">UI/UX DESIGNER</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0.52)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#1d1d1f] w-full">
      <p className="css-4hzbpn  font-semibold leading-[normal] relative shrink-0 text-[20px] w-full">{`Crafting Experiences at the Intersection of Research & Design`}</p>
      <p className="css-4hzbpn  font-light leading-[22px] relative shrink-0 text-[15px] text-justify w-full">With a background in New Media Communications and a self-driven journey into UI/UX design, I bring a unique perspective to every project. I dig into user research to uncover what people truly need, then translate those insights into interfaces that feel effortless.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-full items-center lg:items-start justify-end px-[40px] md:px-[60px] lg:px-0 lg:pl-[60px] py-[60px] relative shrink-0 w-full lg:w-[432px]">
      <Btn1 />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex items-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-contain ml-0 mt-0 relative row-1 w-full max-w-[500px] lg:max-w-[732px]" style={{ maskImage: `url('${imgFrame34427}')`, maskSize: '100% 100%' }}>
      <div className="h-[500px] lg:h-[770px] relative shrink-0 w-full aspect-[732/770]" data-name="ALIFF 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover" src={imgAliff2} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Mask group">
      <Frame7 />
    </div>
  );
}



function Frame5() {
  return (
    <div
      className="content-stretch flex flex-col h-[750px] items-end relative shrink-0 w-[240px] pr-[12px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 25px)); } /* 50% of content + half gap */
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 40s linear infinite;
        }

      `}</style>

      <div className="flex flex-col gap-[50px] animate-scroll-vertical">
        {/* First set of images */}
        <div className="flex flex-col gap-[50px]">
          <ScrollItem imageSrc={imgRectangle3403} />
          <ScrollItem imageSrc={imgRectangle3404} />
          <ScrollItem imageSrc={imgRectangle3405} />
          <ScrollItem imageSrc={imgRectangle3406} />
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex flex-col gap-[50px]">
          <ScrollItem imageSrc={imgRectangle3403} />
          <ScrollItem imageSrc={imgRectangle3404} />
          <ScrollItem imageSrc={imgRectangle3405} />
          <ScrollItem imageSrc={imgRectangle3406} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[771px] items-center overflow-clip pb-[60px] pl-0 pr-[48px] pt-0 relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col-reverse lg:flex-row items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch w-full lg:w-auto justify-center lg:justify-start">
        <Frame4 />
      </div>
      <MaskGroup />
      <div className="hidden lg:block">
        <Frame6 />
      </div>
    </div>
  );
}

function Btn6() {
  return (
    <div className="h-[46px] relative rounded-[32px] shrink-0" data-name="btn">
      <div className="content-stretch flex gap-[40px] h-full items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <LiquidEffect className="inset-[-6.5px_-21px]" />
        <ul className="block css-g0mm18  font-bold leading-[0] relative shrink-0 text-[#1d1d1f] text-[15px]">
          <li className="css-4hzbpn">
            <span className="leading-[22px]">My Projects</span>
          </li>
        </ul>
      </div>
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0.52)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}



function Frame13() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrolling Container with Fade Mask - Padding added to inner container to include hover states within mask */}
      <div
        className="flex gap-[30px] items-center py-[20px]"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)'
        }}
      >
        <style>{`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 15px)); } /* 50% + half gap of 30px */
          }
          .animate-scroll-horizontal {
            animation: scroll-horizontal 60s linear infinite;
            width: fit-content;
          }

        `}</style>

        <div className="flex gap-[30px] animate-scroll-horizontal">
          {/* First Set */}
          <ProjectCard
            title="UiTM Bus Tracker"
            description="Campus buses at UiTM Shah Alam were a daily headache for students. I researched the problem, talked to real users, and designed an app that brings clarity."
            imageSrc={imgRectangle3407}
            link="https://www.behance.net/gallery/234733257/UiTM-Bus-Tracker-UIUX-Case-Study"
          />
          <ProjectCard
            title="HIREDLY: ATS Revamp"
            description="Hiredly's existing Applicant Tracking System was causing low user retention due to an outdated interface, hidden features, and time-consuming man Read More"
            imageSrc={imgRectangle3408}
            link="https://www.behance.net/gallery/241836405/ATS-Revamp-Maximizing-Recruiter-Efficiency"
          />
          <ProjectCard
            title="MAE QR Revamp"
            description="A UX case study exploring how a simple saved QR feature can transform repetitive DuitNow QR payments into one-tap transactions."
            imageSrc={imgRectangle3409}
            link="https://www.behance.net/gallery/242305629/MAE-QR-Payment-Revamp"
          />
          <ProjectCard
            title="2024-2025 Portfolio"
            description="A showcase of my old portfolio where you can see I apply my usage of Graphic Design, Photography alongside Videography, Colorgrading and Motion Graphics"
            imageSrc={imgRectangle3410}
            link="https://www.behance.net/gallery/234787757/Creative-Portfolio"
          />

          {/* Duplicate Set for seamless loop */}
          <ProjectCard
            title="UiTM Bus Tracker"
            description="Campus buses at UiTM Shah Alam were a daily headache for students. I researched the problem, talked to real users, and designed an app that brings clarity."
            imageSrc={imgRectangle3407}
            link="https://www.behance.net/gallery/234733257/UiTM-Bus-Tracker-UIUX-Case-Study"
          />
          <ProjectCard
            title="HIREDLY: ATS Revamp"
            description="Hiredly's existing Applicant Tracking System was causing low user retention due to an outdated interface, hidden features, and time-consuming man Read More"
            imageSrc={imgRectangle3408}
            link="https://www.behance.net/gallery/241836405/ATS-Revamp-Maximizing-Recruiter-Efficiency"
          />
          <ProjectCard
            title="MAE QR Revamp"
            description="A UX case study exploring how a simple saved QR feature can transform repetitive DuitNow QR payments into one-tap transactions."
            imageSrc={imgRectangle3409}
            link="https://www.behance.net/gallery/242305629/MAE-QR-Payment-Revamp"
          />
          <ProjectCard
            title="2024-2025 Portfolio"
            description="A showcase of my old portfolio where you can see I apply my usage of Graphic Design, Photography alongside Videography, Colorgrading and Motion Graphics"
            imageSrc={imgRectangle3410}
            link="https://www.behance.net/gallery/234787757/Creative-Portfolio"
          />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div id="projects-section" className="content-stretch flex flex-col gap-[20px] items-start p-[20px] md:p-[60px] relative shrink-0 w-full max-w-[1440px] mx-auto">
      <Btn6 />
      <Frame13 />
    </div>
  );
}

// Contact Me Section Component
function ContactMeSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);



  return (
    <div id="contact-me-section" className="content-stretch flex flex-col items-center p-[20px] md:p-[60px] relative w-full bg-[#1d1d1f]">
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        .contact-card {
          background: #fafafa;
          border: 1.2px solid rgba(29, 29, 31, 0.1);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(29, 29, 31, 0.2);
          transform: translateY(-4px);
          box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.08);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.2) rotate(5deg);
        }
      `}</style>

      {/* Header Section */}
      <div className="fade-in-up mb-[80px] text-center" style={{ animationDelay: '0.1s' }}>
        <h1 className=" font-bold text-[#fafafa] text-[80px] leading-[1.1] mb-[20px]">
          GET IN TOUCH
        </h1>
        <p className=" font-light text-[rgba(250,250,250,0.7)] text-[18px] leading-[28px] max-w-[600px] mx-auto">
          Have a project in mind or just want to chat about design? I'd love to hear from you!
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1320px] w-full">

        {/* Download Resume Card */}
        <a
          href="resume.pdf"
          download="Aliff_Muzammil_Resume.pdf"
          className="contact-card rounded-[24px] p-[40px] cursor-pointer block text-decoration-none"
          onMouseEnter={() => setHoveredCard('resume')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-col items-center text-center h-full justify-center gap-[20px]">
            <svg
              className={`social-icon ${hoveredCard === 'resume' ? 'pulse-animation' : ''}`}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d1d1f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <div>
              <h3 className=" font-semibold text-[#1d1d1f] text-[24px] leading-[1.3] mb-[8px]">
                Download My Resume
              </h3>
              <p className=" font-light text-[rgba(29,29,31,0.6)] text-[14px]">
                Click to download PDF
              </p>
            </div>
          </div>
        </a>

        {/* Social Media Card */}
        <div className="contact-card rounded-[24px] p-[40px]">
          <div className="flex flex-col h-full justify-center gap-[24px]">
            <div className="flex items-center gap-[16px] mb-[8px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#22c55e] shadow-[0_0_12px_2px_rgba(34,197,94,0.6)] pulse-animation" style={{ animationDelay: '0.5s' }} />
              <h3 className=" font-semibold text-[#1d1d1f] text-[24px] leading-[1.3]">
                Connect With Me
              </h3>
            </div>

            <div className="flex flex-col gap-[16px]">
              {/* Email */}
              <a
                href="mailto:aliffmzmml@gmail.com"
                className="flex items-center gap-[16px] p-[12px] rounded-[12px] hover:bg-[rgba(29,29,31,0.05)] transition-all duration-300 cursor-pointer"
              >
                <svg className="social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <p className=" font-semibold text-[#1d1d1f] text-[15px]">
                    Email
                  </p>
                  <p className=" font-light text-[rgba(29,29,31,0.6)] text-[13px]">
                    aliffmzmml@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aliffmzmml15/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[16px] p-[12px] rounded-[12px] hover:bg-[rgba(29,29,31,0.05)] transition-all duration-300 cursor-pointer"
              >
                <svg className="social-icon" width="24" height="24" viewBox="0 0 24 24" fill="#1d1d1f">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div>
                  <p className=" font-semibold text-[#1d1d1f] text-[15px]">
                    LinkedIn
                  </p>
                  <p className=" font-light text-[rgba(29,29,31,0.6)] text-[13px]">
                    Professional Network
                  </p>
                </div>
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/aliffmuzammi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[16px] p-[12px] rounded-[12px] hover:bg-[rgba(29,29,31,0.05)] transition-all duration-300 cursor-pointer"
              >
                <svg className="social-icon" width="24" height="24" viewBox="0 0 24 24" fill="#1d1d1f">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                <div>
                  <p className=" font-semibold text-[#1d1d1f] text-[15px]">
                    Behance
                  </p>
                  <p className=" font-light text-[rgba(29,29,31,0.6)] text-[13px]">
                    Design Portfolio
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full min-h-screen">
      <style>{`
        .wavy-gradient-bg {
          background: 
            linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(50, 50, 50, 0.4) 60%, rgba(30, 30, 30, 0.6) 100%),
            radial-gradient(circle at 20% 50%, rgba(230, 230, 230, 1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(180, 180, 180, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(140, 140, 140, 0.7) 0%, transparent 50%),
            linear-gradient(135deg, #d4d4d4 0%, #8a8a8a 50%, #6b6b6b 100%);
          background-size: 100% 100%, 200% 200%, 200% 200%, 200% 200%, 100% 100%;
        }
      `}</style>
      <div className="wavy-gradient-bg absolute inset-0 w-full h-full min-h-full -z-10" />
      <Frame3 />
      <Frame />
      <Frame9 />
      <Frame8 />
      <AboutMeSection />
      <ContactMeSection />
      <CustomCursor />
    </div>
  );
}