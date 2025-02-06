"use client";
import Image from "next/image";
import icon1 from "@/public/icon1.png";
import { useState } from "react";

const services = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Painting",
  "Cleaning",
  "Gardening",
  "Pest Control",
  "Security Services",
  "Home Renovation",
  "Appliance Repair",
  "IT Services",
  "Moving Services",
];

const Services = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-[90%] mx-auto mt-32">
      <h1 className="text-[36px] font-[600] text-black text-center">
        Explore a Wide Range of Services
      </h1>
      <p className="text-[22px] font-[500] text-[#434343] text-center max-w-[755px] mx-auto mt-5">
        Servio simplifies finding reliable professionals for all your service
        needs. Post a job, compare bids, and get work done with ease and trust.
      </p>

      <div className="grid md:grid-cols-6  grid-cols-2 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`${
              selected === index ? "bg-[#2DC653]" : "bg-[#F3F3F3]"
            } py-12 rounded-md flex flex-col gap-1 items-center justify-center cursor-pointer transition-all duration-300`}
          >
            <div className={`${selected === index ? "border bg-white py-3 px-3 rounded-full w-fit" : "border py-3 px-3 rounded-full w-fit"}`}>
              <Image src={icon1} alt="icon" height={50} width={50} />
            </div>
            <p className={`text-[21px] font-[400] ${selected === index ? " text-white" : "text-[#1A222D]"} `}>{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
