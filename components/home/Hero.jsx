import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center mt-20 justify-between w-[90%] mx-auto text-center md:text-left">
      {/* Left Side Content */}
      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-[#2DC653] font-[700] text-[32px] md:text-[39px] leading-tight">
          “Find Trusted Professionals for Any Service in Minutes!”
        </h1>
        <p className="text-[18px] md:text-[22px] font-[500] text-[#434343]">
          Servio connects you with expert contractors for all your needs – from house cleaning to home renovations.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
          <button className="py-3 px-6 rounded-full bg-[#434343] text-[#F8F8F8] text-[18px] md:text-[20px] font-[500] w-full md:w-auto">
            Post a job
          </button>
          <button className="py-3 px-6 rounded-full bg-[#2DC653] text-[#F8F8F8] text-[18px] md:text-[20px] font-[500] w-full md:w-auto">
            Join as a contractor
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className=" md:flex hidden md:w-[40%]  justify-center">
        <Image className="w-[80%] md:w-full" src="/hero.png" alt="Hero Image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
