import { useMemo } from "react";

const Divcontent = ({ propFlex, propAlignSelf }) => {
  const divcontentStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className="flex-1 rounded-md bg-gray-600 shadow-[0px_3px_12px_1px_rgba(85,_128,_219,_0.21)] box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[30px] pb-[30px] gap-[19.5px] max-w-full text-left text-sm text-gray-200 font-wf-body-body-medium border-[1px] border-solid border-color-palette-1-quill-scheme3"
      style={divcontentStyle}
    >
      <div className="w-[137px] flex flex-col items-start justify-start gap-[0.5px]">
        <div className="relative leading-[21px] inline-block min-w-[91.4px]">
          Headquarters
        </div>
        <div className="self-stretch relative text-base leading-[24px] font-medium text-gray-300">
          Switzerland
        </div>
      </div>
      <div className="w-[185.9px] flex flex-col items-start justify-start">
        <div className="w-[73.7px] relative leading-[21px] flex items-center">
          Chain
        </div>
        <div className="self-stretch relative text-base leading-[24px] font-medium text-gray-300">
          Pulse Blockchain
        </div>
      </div>
    </div>
  );
};

export default Divcontent;
