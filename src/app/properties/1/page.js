"use client"; // Ensures it runs only on the client-side

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../../components/navbar";
import Link from "next/link";
import Footer from "../../components/footer";
const images = Array.from(
  { length: 45 },
  (_, i) => `/island_time_cabin/${i + 1}.jpeg`
);

export default function Page() {
  return (
    <div data-aos="fade-up">
      <Navbar />
      <Link
        href="/"
        className="hidden md:flex items-center text-primary gap-2 px-6 md:px-16 lg:px-36 mt-13 mb-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>Back</span>
      </Link>
      {/* /* Booking Iframe and Swiper Carousel */}
      <div className="flex flex-row justify-between items-center px-6 md:px-16 lg:px-36 mb-4">
        <h1 className="hidden md:block text-3xl font-semibold">
          Island Time Cabin
        </h1>
        <Link href="/" className="flex items-center md:hidden gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span>Back</span>
        </Link>
        <Link
          className="flex gap-3 text-end underline"
          href={
            "https://www.airbnb.com/rooms/1396513940783035560?guests=1&adults=1&s=67&unique_share_id=9b2a5b9b-f4b1-4953-ab03-5250c5c098d0"
          }
          target="_blank"
        >
          <span>View in Airbnb</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </Link>
      </div>
      <p className="px-6 md:px-16 lg:px-36 text-slate-500">
        5BR/3.5BA cabin just 30 minutes from Yellowstone! Sleeps 16 with 1 King,
        6 Queens, and 2 Twins. Features include a game room with a pool table,
        pop-a-shot, and arcade, a hot tub, a basement bar, and a wrap-around
        deck. Enjoy a fully stocked kitchen, a cozy fireplace, and an EV
        charger. Minutes from Yellowstone, trails, lakes, and the river—perfect
        for fishing, kayaking, ATVing, and snowmobiling. Ideal for family
        vacations or group getaways year-round in the heart of Island Park.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-start w-full mt-6 md:mt-9 gap-5">
        <div className="flex justify-center md:order-first order-last w-full sm:w-[90%] md:w-[50%] lg:w-[40%] xl:w-[20%]">
          <div className="flex justify-center">
            <div className="relative w-full">
              <iframe
                id="booking-iframe"
                sandbox="allow-top-navigation allow-scripts allow-same-origin"
                className="w-[304px] h-[600px]"
                frameBorder="0"
                src="https://booking.hospitable.com/widget/9bf134db-bc77-4afa-b0d4-7b19575695db/1810512"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full sm:w-full md:w-[50%] lg:w-[40%] xl:w-[60%] md:order-last order-first px-3 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: false, dynamicBullets: false, el: null }}
            style={{
              "--swiper-navigation-color": "#0097b2",
              "--swiper-navigation-size": "20px",
              "--swiper-pagination-color": "#0097b2",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-lg overflow-hidden"
          >
            {images.map((item) => (
              <SwiperSlide key={item}>
                <img
                  src={item}
                  alt="Slide 1"
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h1 className="text-2xl font-medium mt-5 block md:hidden">
            Island Time Cabin
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
