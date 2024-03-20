import { useMemo } from "react";

const FrameComponent14 = ({
  collectedAndReviewedAllRe,
  obtainedAClearUnderstandi,
  discussedClientConcernsAn,
  propWidth,
}) => {
  const functionCallStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className="w-[404px] flex flex-row items-start justify-start pt-0 px-5 pb-2.5 box-border max-w-full shrink-0 text-left text-lg text-gray-300 font-poppins"
      style={functionCallStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="self-stretch relative leading-[27px]">
          <ul className="m-0 font-inherit text-inherit pl-6">
            <li>{collectedAndReviewedAllRe}</li>
          </ul>
        </div>
        <div className="self-stretch relative leading-[27px]">
          <ul className="m-0 font-inherit text-inherit pl-6">
            <li>{obtainedAClearUnderstandi}</li>
          </ul>
        </div>
        <div className="self-stretch relative leading-[27px]">
          <ul className="m-0 font-inherit text-inherit pl-6">
            <li>{discussedClientConcernsAn}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;
