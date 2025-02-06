import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const Buisness = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-center mt-32 justify-between w-[90%] mx-auto">
          <Image className="md:w-[50%] w-full md:mt-0 mt-6" src="/buis.png" alt="Hero Image" width={500} height={500} />
      <div className=" flex flex-col gap-5 md:w-[40%] w-full">
        <h1 className=" text-[#000] font-[700] text-[36px]">
        Get the work you want, when you want it
        </h1>
        <p className=" text-[22px] font-[500] text-[#434343]">
        Servio connects trusted tradespeople with local jobs in minutes. Quickly get the info you need, view photos, and screen customers before taking on a job.
        </p>
        <div className=" grid grid-cols-2 gap-5">
            <span className=" text-[20px] font-[400] text-[#434343] flex items-center gap-3"><FaCheck size={20} className="text-[#2DC653]" /> Promote your business locally</span>
            <span className=" text-[20px] font-[400] text-[#434343] flex items-center gap-3"><FaCheck size={20} className="text-[#2DC653]" /> Receive payments within 7 days</span>
            <span className=" text-[20px] font-[400] text-[#434343] flex items-center gap-3"><FaCheck size={20} className="text-[#2DC653]" /> Send quotes and schedule jobs</span>
            <span className=" text-[20px] font-[400] text-[#434343] flex items-center gap-3"><FaCheck size={20} className="text-[#2DC653]" /> Review customers</span>

        </div>
          <button className=" py-2 px-12 rounded-full bg-[#2DC653] text-[#F8F8F8] text-[20px] font-[500] mt-8 w-fit">
          Earn with Servio
          </button>
      </div>
    
    </div>
  );
};

export default Buisness;
