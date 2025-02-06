import Image from "next/image"
import insta from '@/public/instagram.png'
import tiktok from '@/public/tiktok.png'
const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto mt-32 mb-12">
         <div className=" flex flex-col md:items-start items-center gap-3">
         <h1 className=" text-[42px] text-[#2DC653] font-[700]">Servio</h1>
        <h1 className=" text-[20px] text-[#434343] font-[400]">Servio 2025</h1>
        <h1 className=" text-[20px] text-[#434343] font-[400]">1012 Ocean Avenue, New York, USA</h1>
        <h1 className=" text-[#000] text-[20px] font-[600] mt-8">Legal & Privacy Policy</h1>
         </div>

         <div className=" flex flex-col md:items-start items-center gap-3">
            <h1 className=" font-[400] text-[#000] text-[20px]">Any Question?</h1>
            <h2 className=" font-[600] text-[#000] text-[20px]">Contact us</h2>
            <div className=" flex items-center gap-3 mt-8">
                <Image className=" cursor-pointer" src={insta} alt="image" width={150} height={150}  />
                <Image className=" cursor-pointer" src={tiktok} alt="image" width={100} height={100}  />
            </div>
         </div>
    </div>
  )
}

export default Footer