import svgPaths from "./svg-vgh1p1unl4";

function Fi2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="fi_18480625">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="fi_18480625">
          <path d={svgPaths.p177ae980} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p28b5b070} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p27996c00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p26ed7b80} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p171ef100} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p24bc4480} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function HeadingAndDescription() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px not-italic relative tracking-[-1px]" data-name="Heading and Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#1d1d1d] text-[20px] w-full">Content discoverability</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#575352] text-[18px] w-full">Ensuring all types of community content - including blogs, KBAs and projects get equal visibility as forum discussions.</p>
    </div>
  );
}

function LinkCollectionItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Link Collection Item">
      <Fi2 />
      <HeadingAndDescription />
    </div>
  );
}

function Fi1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="fi_12639173">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_318_611)" id="fi_12639173">
          <path clipRule="evenodd" d={svgPaths.p289d4080} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_318_611">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeadingAndDescription1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px not-italic relative tracking-[-1px]" data-name="Heading and Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#1d1d1d] text-[20px] w-full">Community engagement</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#575352] text-[18px] w-full">Encouraging participation beyond troubleshooting and promoting knowledge sharing and active participation of users.</p>
    </div>
  );
}

function LinkCollectionItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Link Collection Item">
      <Fi1 />
      <HeadingAndDescription1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[2.94%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 37.6467">
        <g id="Group">
          <path d={svgPaths.p2fb7e380} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1332e880} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p159cfb00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p399e5900} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[2.94%_0]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.94%_0]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.94%_0]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Fi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="fi_8755282">
      <Group />
    </div>
  );
}

function HeadingAndDescription2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px not-italic relative tracking-[-1px]" data-name="Heading and Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#1d1d1d] text-[20px] w-full">Support deflection</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#575352] text-[18px] w-full">Reducing dependency on hotline numbers and support channels while enhancing self-service support experience.</p>
    </div>
  );
}

function LinkCollectionItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Link Collection Item">
      <Fi />
      <HeadingAndDescription2 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Items">
      <LinkCollectionItem />
      <LinkCollectionItem1 />
      <LinkCollectionItem2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1a1a2e] text-[24px] tracking-[-1px] w-full">Key Priorities</p>
      <Items />
    </div>
  );
}