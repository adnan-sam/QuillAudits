import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false); // State for dropdown visibility

  const handleServiceClick = () => {
    setIsActive(!isActive); // Toggle dropdown visibility on click
  };

  return (
    <div className="flex flex-row justify-between text-white font-jost">
      {/* LOGO */}
      <div className="ml-12 flex flex-row items-center gap-2">
        <Image
          src="/icon.svg"
          alt="logo1"
          width={25}
          height={25}
          className="z-10"
        />
        <Image
          src="/quillaudits.svg"
          alt="logo2"
          width={120}
          height={120}
          className="z-10"
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-row mx-3 items-center z-10">
        <div
          className={`items-center flex flex-row mx-3 hover:text-teal-500 cursor-pointer transition-colors duration-300 ${
            isActive && 'active' // Add 'active' class when dropdown is open
          }`}
          onClick={handleServiceClick} // Handle click on Services
        >
          <p>Services</p>
          <Image
            src="/arrow.svg"
            alt=""
            width={14.1}
            height={7.4}
            className="px-1.5"
          />
        </div>
        <p className="z-10 mx-3 hover:text-teal-500 cursor-pointer transition-colors duration-300">
          Pricing
        </p>
        <p className="z-10 mx-3 hover:text-teal-500 cursor-pointer transition-colors duration-300">
          Our Audits
        </p>
        <div className="items-center flex flex-row mx-3 hover:text-teal-500 cursor-pointer transition-colors duration-300">
          <p>Tools</p>
          <Image
            src="/arrow.svg"
            alt=""
            width={14.1}
            height={7.4}
            className="px-1.5"
          />
        </div>
        <div className="items-center flex flex-row mx-3 hover:text-teal-500 cursor-pointer transition-colors duration-300">
          <p>Resources</p>
          <Image
            src="/arrow.svg"
            alt=""
            width={14.1}
            height={7.4}
            className="px-1.5"
          />
        </div>
        <p className="mx-3 z-10 hover:text-teal-500 cursor-pointer transition-colors duration-300">
          Refer-Earn-Secure
        </p>
      </div>

      {/* Dropdown Menu (conditionally rendered) */}
      {isActive && (
        <div className="absolute top-full left-0 bg-white shadow-md w-full">
          {/* Your dropdown menu content here */}
        </div>
      )}

      {/* Button */}
      <div className="mr-12 items-center mx-3 flex">
        <button className="h-fit px-4 py-2 cursor-pointer [border:none] bg-[transparent] rounded-[4.03px] [background:linear-gradient(266.04deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] z-[1] text-md font-jost text-white text-center">
          Request An Audit
        </button>
      </div>
    </div>
  );
};

export default NavBar;
