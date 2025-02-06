import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Work = () => {
  return (
    <div className="  mt-32  w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
            <div className=" flex flex-col gap-5 md:w-[40%] w-full">
        <h1 className=" text-[#000] font-[600] text-[36px]">
        Sign up today to get early access to local jobs
        </h1>
        <button className=" py-2 px-12 rounded-full bg-[#2DC653] text-[#F8F8F8] text-[20px] font-[500] mt-8 flex items-center gap-3 w-fit">
        Join waitlist <FaArrowRightLong size={20} />
          </button>
          <button className=" flex items-center gap-3 mt-8">
          <Image src="/google.png" alt="Image" width={200} height={200} />
          <Image src="/apple.png" alt="Image" width={200} height={200} />
          </button>
      </div>
      <Image className="md:w-[40%] w-full" src="/signup.png" alt="Image" width={500} height={500} />
            </div>
            <div className=" h-[1px] bg-black"></div>
    </div>
  );
};

export default Work;
