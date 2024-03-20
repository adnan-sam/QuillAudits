const FrameComponent5 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-px box-border max-w-full text-left text-sm-9 text-white font-jost">
      <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
        <div className="self-stretch h-px flex flex-row items-start justify-end py-0 pr-[2.5px] pl-0 box-border max-w-full">
          <img
            className="h-px flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
            alt=""
            src="/image-composer.svg"
          />
        </div>
        <div className="w-[345px] flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
            <div className="relative font-medium inline-block min-w-[84px] z-[1]">
              Privacy Policy
            </div>
          </div>
          <div className="relative z-[1]">
            All Rights Reserved. © Copyright 2023. QuillAudits - LLC
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
