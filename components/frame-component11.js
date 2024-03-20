const FrameComponent11 = ({
  unauthorizedClaimCompound,
  listItemOnIntroducingNewA,
}) => {
  return (
    <section className="w-[390px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full shrink-0 text-left text-5xl text-gray-300 font-poppins">
      <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
        <div className="w-[357px] relative font-semibold flex items-center max-w-full box-border pr-5">
          <span className="w-full">
            <ol className="m-0 font-inherit text-inherit pl-8">
              <li>{unauthorizedClaimCompound}</li>
            </ol>
          </span>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full text-lg">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
            <div className="relative leading-[27px] inline-block min-w-[16px]">
              a.
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[209px] max-w-full">
              <div className="self-stretch relative leading-[27px]">
                {listItemOnIntroducingNewA}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
