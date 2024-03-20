const Quote = () => {
  return (
    <section className="w-full h-[802px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
      <img
        className="absolute top-[-25px] left-[-187px] w-[2148px] h-[827px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[225px] left-[855px] rounded-md shadow-[0px_10px_20px_rgba(90,_122,_190,_0.2),_0px_1px_1px_rgba(90,_122,_190,_0.1)] w-[180px] h-20 z-[4]">
        <img
          className="absolute top-[calc(50%_-_15.4px)] left-[calc(50%_-_74px)] w-[148px] h-[30.8px] overflow-hidden object-cover hidden"
          alt=""
          src="/agorapulselogopng@2x.png"
        />
        <img
          className="absolute top-[16px] left-[15px] w-[152px] h-[49px] object-contain z-[5]"
          alt=""
          src="/cdpensionblack@2x.png"
        />
      </button>
    </section>
  );
};

export default Quote;
