
import { FaArrowAltCircleDown } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { MdOutlinePaid } from "react-icons/md";
const FreeToJion = () => {
  return (
    <div className=" bg-[#2DC653] w-[90%] mx-auto flex flex-col gap-7 md:px-32 px-4 mt-32 rounded-lg py-20">
       <h1 className=" text-[36px] font-[600] text-white text-center">Free to join. Easy to use.</h1>
       <p className=" text-[22px] font-[500] text-white text-center max-w-[555px] mx-auto">Unlike other platforms, with Servio there's no sign-up cost, no subscription fee, and only a 10% service fee on completed jobs.
       Oh, and you get your first month free.</p>
       <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  items-center justify-between gap-4 mt-12">
          <h1 className=" text-white text-[22px] font-[600] flex items-center gap-3"><span className="border-[1px] border-white py-4 px-4 rounded-full"><FaArrowAltCircleDown size={20} className="text-white" /></span> Download</h1>

          <h1 className=" text-white text-[22px] font-[600] flex items-center gap-3"><span className="border-[1px] border-white py-4 px-4 rounded-full"><TbSettingsFilled size={20} className="text-white" /></span> Find jobs</h1>

          <h1 className=" text-white text-[22px] font-[600] flex items-center gap-3"><span className="border-[1px] border-white py-4 px-4 rounded-full"><MdOutlinePaid size={20} className="text-white" /></span> Download</h1>

          <h1 className=" text-white text-[22px] font-[600] flex items-center gap-3"><span className="border-[1px] border-white py-4 px-4 rounded-full"><TbRosetteDiscountCheck size={20} className="text-white" /></span> Easy</h1>
       </div>
    </div>
  )
}

export default FreeToJion