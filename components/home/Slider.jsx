"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import slider from "@/public/slider.png";

const sliderData = [
  {
    category: "Plumbing",
    title: "Pipe Repairs",
    user: "Martin Rosser",
    price: "$120.00",
    rating: "4.8",
  },
  {
    category: "Electrical",
    title: "Wiring Fix",
    user: "John Doe",
    price: "$150.00",
    rating: "4.7",
  },
  {
    category: "Cleaning",
    title: "House Cleaning",
    user: "Emily Clark",
    price: "$80.00",
    rating: "4.9",
  },
  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },

  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },

  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },

  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },

  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },

  {
    category: "Painting",
    title: "Wall Painting",
    user: "Alex Brown",
    price: "$200.00",
    rating: "4.6",
  },
];

const Slider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{

            440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-32"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F8F8F8] rounded-md shadow-md py-3 w-[350px] px-3 gap-3 flex justify-between border">
              <Image src={slider} alt="image" width={120} height={120} />
              <div className="flex flex-col gap-3">
                <h1 className="py-1 px-4 rounded-md bg-[#FFFFFF] text-black text-[10px] font-[500]">
                  {item.category}
                </h1>
                <h2 className="text-[14px] font-[500] text-black">{item.title}</h2>
                <span className="text-[12px] font-[300] text-[#1A222DA8] flex items-center gap-3">
                  <FaUser size={20} className="text-[#2DC653]" /> {item.user}
                </span>
                <h1 className="text-[19px] font-[600] text-[#2DC653]">{item.price}</h1>
              </div>
              <h1 className="py-1 px-4 rounded-md bg-[#FFFFFF] text-black text-[10px] font-[500] flex gap-2 w-fit h-fit items-center">
                {item.rating} <IoIosStar size={20} className="text-[#FBBC05]" />
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
