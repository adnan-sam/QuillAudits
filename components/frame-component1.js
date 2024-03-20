const FrameComponent1 = ({
  vulnerabilityIdentificati,
  searchingForKnownVulnerab,
}) => {
  return (
    <div className="w-[1450px] flex flex-row items-start justify-center pt-0 px-5 pb-3 box-border max-w-full text-left text-lg text-gray-300 font-poppins">
      <div className="w-[518px] flex flex-row flex-wrap items-start justify-center gap-[12px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
          <div className="w-2 h-2 relative rounded-5xs box-border border-[1px] border-solid border-black" />
        </div>
        <div className="flex-1 relative leading-[27px] inline-block min-w-[324px] max-w-full">
          <i className="font-medium">{vulnerabilityIdentificati}</i>
          <span>{searchingForKnownVulnerab}</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
