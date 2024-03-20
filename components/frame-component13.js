const FrameComponent13 = () => {
  return (
    <section className="w-[406px] flex flex-row items-start justify-start pt-0 px-[21px] pb-2.5 box-border max-w-full shrink-0 text-left text-lg text-gray-300 font-poppins">
      <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="self-stretch h-[81px] relative leading-[27px] flex items-center">
          <span>
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>
                Conducted a line-by-line review of the smart contract code,
                focusing on:
              </li>
            </ul>
          </span>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-8">
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[156.5px]">
                <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
                <div className="flex flex-col items-start justify-start gap-[104px]">
                  <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
                  <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
                </div>
                <div className="w-1.5 h-1.5 relative rounded-[50%] box-border border-[0px] border-solid border-black" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
              <div className="self-stretch relative leading-[27px]">
                <i className="font-medium">{`Vulnerability identification: `}</i>
                <span>
                  Searching for known vulnerabilities like reentrancy,
                  front-running, integer overflows, and access control issues,
                  etc.
                </span>
              </div>
              <div className="self-stretch relative leading-[27px]">
                <i className="font-medium">{`Logic flaws: `}</i>
                <span>
                  Identifying inconsistencies or unintended behaviours in the
                  code logic.
                </span>
              </div>
              <div className="self-stretch relative leading-[27px]">
                <i className="font-medium">{`Tokenomics correctness: `}</i>
                <span>
                  Verifying if the code accurately implements the intended
                  economic model and token distribution mechanisms.
                </span>
              </div>
              <div className="self-stretch relative leading-[27px]">
                <i className="font-medium">{`Solidity best practices: `}</i>
                <span>
                  Compliance with secure coding standards and adherence to
                  established guidelines.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent13;
