import imgArrow6 from "figma:asset/fd53e336e114fbcb6fe73efdfec3dbbd777142f3.webp";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn  font-bold leading-[normal] relative shrink-0 text-[#fafafa] text-[64px] w-[233px]">WHO IS ALIFF</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[108px]">
      <div className="flex flex-col  font-bold justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[180px] w-full">
        <p className="css-4hzbpn leading-[normal]">?</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[160px] items-center relative shrink-0 w-[357px]">
      <Frame />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className=" font-light leading-[22px] relative shrink-0 text-[#fafafa] text-[15px] text-justify w-[809px]">
        <p className="css-4hzbpn mb-0">Who am I? I fell in love with storytelling long before I knew what UI/UX was. It started with photography, an attempt to translate my emotions into images, to make people feel something without saying a word. I watched films not to escape, but to study: how does this scene make me feel? Why did that cut hit so hard? I applied those lessons to my own photographs, treating every shot like a frame in a story.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">{`But over time, my focus shifted. I stopped asking how can I express myself? and started asking how can I understand others? That question led me to UI/UX design. Now I channel the same obsession into research and interfaces, building things that aren't about me, but about the people who use them. I welcome feedback because it teaches me. And I believe, deeply, that effort carves the path. If I keep going, I'll get there.`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative rounded-[16px] shrink-0">
      <Frame3 />
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative w-full">
      <div className=" font-light leading-[0] min-w-full relative shrink-0 text-[#fafafa] text-[15px] text-justify w-[min-content]">
        <p className="css-4hzbpn  font-semibold leading-[22px] mb-0">Bachelor of New Media Communication (Hons.)</p>
        <p className="css-4hzbpn leading-[22px] mb-0">Universiti Teknologi MARA (UiTM) Shah Alam</p>
        <ul>
          <li className="css-4hzbpn list-disc ms-[22.5px]">
            <span className="leading-[22px]">{`Multiple Dean's List honors throughout degree studies`}</span>
          </li>
        </ul>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "41", "--transform-inner-height": "1501" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-7.36px_-2.5%_-7.36px_0]">
              <img loading="lazy" alt="" className="block max-w-none size-full" height="14.728" src={imgArrow6} width="41" />
            </div>
          </div>
        </div>
      </div>
      <div className=" font-light leading-[0] min-w-full relative shrink-0 text-[#fafafa] text-[15px] text-justify w-[min-content]">
        <p className="css-4hzbpn  font-semibold leading-[22px] mb-0">Udemy Certification</p>
        <ul>
          <li className="css-4hzbpn list-disc ms-[22.5px]">
            <span className="leading-[22px]">{`Complete Web & Mobile Designer: UI/UX, Figma`}</span>
          </li>
        </ul>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "41", "--transform-inner-height": "1501" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-7.36px_-2.5%_-7.36px_0]">
              <img loading="lazy" alt="" className="block max-w-none size-full" height="14.728" src={imgArrow6} width="41" />
            </div>
          </div>
        </div>
      </div>
      <div className=" font-light leading-[0] min-w-full relative shrink-0 text-[#fafafa] text-[15px] text-justify w-[min-content]">
        <p className="css-4hzbpn  font-semibold leading-[22px] mb-0">Diploma in New Media Communication</p>
        <p className="css-4hzbpn leading-[22px] mb-0">Universiti Teknologi MARA (UiTM) Alor Gajah</p>
        <ul>
          <li className="css-4hzbpn list-disc ms-[22.5px]">
            <span className="leading-[22px]">{`Vice Chancellor's Award recipient for exceptional academic performance`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-[442px] items-start min-h-px min-w-px relative rounded-[16px]">
      <p className="css-4hzbpn  font-bold leading-[normal] relative shrink-0 text-[#fafafa] text-[32px] w-full">EDUCATION</p>
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame5 />
      <Frame1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="css-ew64yg  font-bold leading-[38.4px] relative shrink-0 text-[#fafafa] text-[32px]">{`SKILLS & EXPERTISE`}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">User Research</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[62.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Research</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container2() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[30.352px] py-0 relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">Wireframing</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[46.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Design</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[60.703px] py-0 relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">Prototyping</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[46.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Design</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container11() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[48.563px] py-0 relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[45px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">Figma</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Tools</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container14() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container15() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[30.352px] py-0 relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[81px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">UI Design</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[46.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Design</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container18() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container19() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[42.492px] py-0 relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[3] self-stretch shrink-0" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">UX Strategy</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[62.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Strategy</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container22() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container23() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[72.844px] py-0 relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[3] self-stretch shrink-0" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">Usability Testing</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[62.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Research</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container26() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container27() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[60.703px] py-0 relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[4] self-stretch shrink-0" data-name="Container">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[72px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-semibold leading-[22.5px] left-0 text-[#fafafa] text-[15px] top-[0.5px]">Adobe XD</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg  font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(250,250,250,0.6)] top-[-0.5px]">Tools</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container30() {
  return <div className="bg-[#fafafa] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container31() {
  return (
    <div className="bg-[rgba(250,250,250,0.1)] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[91.055px] py-0 relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[4] self-stretch shrink-0" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(4,_minmax(0,_1fr))] h-[226px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container8 />
      <Container12 />
      <Container16 />
      <Container20 />
      <Container24 />
      <Container28 />
      <Container32 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg  font-light leading-[24px] left-[619.01px] text-[#fafafa] text-[15px] text-center top-[0.5px] translate-x-[-50%]">Constantly learning and evolving with the latest design tools and methodologies to deliver exceptional user experiences.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(29,29,31,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[307px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[459px] items-start relative rounded-[24px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Container">
      <Container />
      <Container35 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative rounded-[24px] shrink-0 w-full">
      <Frame9 />
      <Container36 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#1d1d1f] content-stretch flex flex-col items-start p-[60px] relative size-full">
      <Frame8 />
    </div>
  );
}