const FrameComponent16 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[45px] pr-[21px] pl-[39px] box-border max-w-full shrink-0 text-left text-lg text-gray-300 font-poppins">
      <div className="flex-1 flex flex-col items-start justify-start gap-[34.5px] max-w-full mq370:gap-[17px_34.5px]">
        <div className="w-[342px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="w-[326px] h-[25.5px] flex flex-row items-start justify-start pt-[0.5px] px-0 pb-0 box-border max-w-full text-xl font-wf-body-body-medium">
            <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#ffabc9_62%)] flex flex-row items-end justify-start pt-0 px-0.5 pb-[1.5px] box-border max-w-full">
              <b className="relative leading-[24px] z-[1]">
                Before QuillAudits
              </b>
            </div>
          </div>
          <div className="w-[330px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <div className="flex-1 relative leading-[24px] inline-block max-w-full">
              Exploits like reentrancy and front-running can let attackers
              withdraw extra funds and manipulate transaction timing for unfair
              gains.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 relative leading-[24px] inline-block max-w-full">
              Vulnerabilities could allow users to mint CDP tokens or pension
              shares indefinitely, disrupting the system's economic balance.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24.75px] max-w-full">
          <div className="self-stretch h-[67px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0)_58.5%,_#abcdff_62%)] flex flex-row items-end justify-start py-px px-0.5 box-border whitespace-nowrap text-xl font-wf-body-body-medium">
            <b className="h-6 w-[183px] relative leading-[30px] flex items-center shrink-0 z-[1]">
              After QuillAudits
            </b>
          </div>
          <div className="w-[349.3px] h-11 relative leading-[24px] flex items-center shrink-0 max-w-full">
            Implementation of reentrancy protection mechanisms.
          </div>
          <div className="self-stretch relative leading-[24px]">
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
