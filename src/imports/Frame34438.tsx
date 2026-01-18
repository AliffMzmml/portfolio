import imgRectangle3403 from "figma:asset/e1d0d23b0d989981c1b76863f74a3fb2e449aa30.webp";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#1d1d1f] w-full">
      <p className="css-4hzbpn  font-semibold leading-[normal] relative shrink-0 text-[20px] w-full">2024-2025 Portfolio</p>
      <p className="css-4hzbpn  font-light leading-[22px] relative shrink-0 text-[15px] text-justify w-full">A showcase of my old portfolio where you can see I apply my usage of Graphic Design, Photography alongside Videography, Colorgrading and Motion Graphics</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-center min-h-px min-w-px relative">
      <div className="h-[300px] pointer-events-none relative rounded-[8px] shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[102%] left-[-10.52%] max-w-none top-0 w-[123.47%]" src={imgRectangle3403} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e4e4e4] border-solid inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_-1px_rgba(12,12,13,0.05)]" />
      </div>
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center p-[16px] relative rounded-[16px] size-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame1 />
      </div>
    </div>
  );
}