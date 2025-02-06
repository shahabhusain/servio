"use client";
import Image from "next/image";
import img1 from "@/public/icon1.png";
import img2 from "@/public/icon2.png";
import img3 from "@/public/icon3.png";
import img4 from "@/public/icon4.png";
import img5 from "@/public/icon5.png";
import img6 from "@/public/icon6.png";
import img7 from "@/public/icon7.png";
import img8 from "@/public/icon8.png";
import img9 from "@/public/icon9.png";
import img10 from "@/public/icon10.png";
import img11 from "@/public/icon11.png";
import { useState } from "react";
const services = [
    {title:"Plumbing", img:img1},
    {title:"Appliance Repair", img:img2},
    {title:"Pressure Washing", img:img3},
    {title:"Welding", img:img4},
    {title:"Waste removal", img:img5},
    {title:"Landscaping", img:img6},
    {title:"Auto", img:img7},
    {title:"Hauling", img:img8},
    {title:"Painting", img:img9},
    {title:"Electrician", img:img10},
    {title:"Cleaning", img:img11},
];

const Services = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div id="service" className="w-[90%] mx-auto mt-32">
      <h1 className="text-[36px] font-[600] text-black text-center">
        Explore a Wide Range of Services
      </h1>
      <p className="text-[22px] font-[500] text-[#434343] text-center max-w-[755px] mx-auto mt-5">
        Servio simplifies finding reliable professionals for all your service
        needs. Post a job, compare bids, and get work done with ease and trust.
      </p>

      <div className="grid md:grid-cols-6  sm:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`${
              selected === index ? "bg-[#2DC653]" : "bg-[#F3F3F3]"
            } py-12 rounded-md flex flex-col gap-1 items-center justify-center cursor-pointer transition-all duration-300`}
          >
            <div className={`${selected === index ? "border-[1px] border-[#2DC653] bg-white py-4 px-4 rounded-full w-fit" : "border-[1px] border-[#2DC653] bg-white py-4 px-4 py-3 px-3 rounded-full w-fit"}`}>
              <Image src={service.img} alt="icon" height={50} width={50} />
            </div>
            <p className={`text-[21px] font-[400] ${selected === index ? " text-white" : "text-[#1A222D]"} `}>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
