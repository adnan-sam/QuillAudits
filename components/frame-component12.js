const FrameComponent12 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[55px] pl-14 text-left text-lg text-gray-300 font-poppins">
      <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
          </div>
          <div className="flex-1 relative leading-[27px] inline-block min-w-[197px]">
            Developed and executed a comprehensive set of test cases covering
            various user interactions and edge cases.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[130px]">
              <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[27px]">
                <div className="h-1.5 w-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
              </div>
              <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[197px]">
            <div className="self-stretch relative leading-[27px]">
              Simulated different deposit, claim, and referral scenarios to
              assess functionality and uncover potential exploits.
            </div>
            <div className="self-stretch relative leading-[27px]">
              Focused on scenarios identified during the manual review and
              client concerns (e.g., infinite minting, reward calculation
              errors).
            </div>
            <div className="self-stretch relative leading-[27px]">
              Leveraged tools like Hardhat and Ganache to deploy and test the
              smart contract locally.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
