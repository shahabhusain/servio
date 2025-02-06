import Image from "next/image";

const Work = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-32 justify-between w-[90%] mx-auto">
      <div className=" flex flex-col gap-5 md:w-[40%] w-full">
        <h1 className=" text-[#000] font-[700] text-[36px]">
        Get the work you want, when you want it
        </h1>
        <p className=" text-[22px] font-[500] text-[#434343]">
        Servio connects trusted tradespeople with local jobs in minutes. Quickly get the info you need, view photos, and screen customers before taking on a job.
        </p>
          <button className=" py-2 px-12 rounded-full bg-[#2DC653] text-[#F8F8F8] text-[20px] font-[500] mt-8 w-fit">
          Earn with Servio
          </button>
      </div>
      <Image className="md:w-[40%] w-full md:mt-0 mt-12" src="/work.png" alt="Hero Image" width={500} height={500} />
    </div>
  );
};

export default Work;
