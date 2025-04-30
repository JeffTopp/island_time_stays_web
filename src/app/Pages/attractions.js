"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Attractions() {
  const attractions = [
    {
      name: "Backcountry Adventures",
      image: "/attractions_island_time_stays/Recreation_Powersports.png",
      distance: "Just at the doorstep",
      link: "https://islandparkchamber.org/sites/islandparkchamber.org/files/pdf/island-park-trailmap24.pdf"
    },
    {
      name: "Yellow Stone National Park",
      image: "/attractions_island_time_stays/Yellowstone.png",
      distance: "Less than 30 minutes away",  
      link: "https://www.nps.gov/yell/index.htm"
    },
    {
      name: "Wilderness Experiences",
      image: "/attractions_island_time_stays/fly_fishing.png",
      distance: "Just at the doorstep",
      link: "https://islandparkchamber.org/play"
    },
  ];

  return (
    <section
      className="attractions px-0 sm:px-7 mt-11 pb-11 relative h-[100vh] flex justify-center items-center"
      id="attractions"
      data-aos="fade-up"
    >
      <div className="relative w-full text-start">
        <div className="px-10 text-center">
          <div className="flex mb-3 flex-row items-center justify-center gap-4">
            <p className="text-xl mb-0 tracking-widest text-primary font-semibold">
              NEARBY ATTRACTIONS
            </p>
            <div className="bg-primary p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <image
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAhdJREFUOE99VIt12kAQnNkGgjtQKjDqACoIriByBYQK7FRgXAGhAuwKIBWIVIA6iNLATbT3AeUpyb2nd6uTbm53ZvYIHwSgGP07zp8nU97LOI+AJC0AfBIw82UffkaKBYE9hVeadfT3AjQ+IUgrCgcQPRAfH1WMhR6MkDMA/ixJnko16aCclhSOaaNq0npJLYB5zuhEchmkGYUWVGe05ZWRcWmSfH1LchMLkVYA7nNmHWl7LydIL4Aa0u4KsTGjvOFJwJzCisb3G21TJRTUgNoJPFHY0OwcyQ7SfDj5IKCiUNN4vnE3BsrkB1UgLgI6AhuSb0UYz2o3fGiGheerUpGczNAkjv99o/HRZU0ZBa1AHCYeuen+pxEyqEDXKaqXOAo6gqoE1mZ0qf8/GPdUAloKJ5o9lIxaEB3JB0lrQLPoCWFfjBck99Pn0QmvAl4GoAXNPhayf3q9APaDq9vsYIdyiffxXWoA7DKQm7UWsKbQ0HhXgLyYZyO/pqqmSo0dXNpi8N2T7yONVEr54gYz2t6BJC8tluFz6rVEvGfyTmPni6MsKwdaQDiCWAwt8D0b9BJb5S/yCzybsc5AK6TerB3Izeg9tZWfllrC48ZI5+w6khDYAngE0AFwoDWourSI986X7AsvpgNYk+y9nnhdxJKDq9lCcGeXhLc0btJ9lHjxzD7ky+dHAiktebv3In/CvZMm8JcxtdNv+YQjnJjB+zMAAAAASUVORK5CYII="
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                />
              </svg>
            </div>
          </div>
          <p className="w-full md:w-1/2 mx-auto mt-4">
            Explore top attractions near Island Time Stays. Discover scenic
            trails, world-class fishing, kayaking, ATV routes, and snowmobiling
            adventures right here in Island Park, Idaho.
          </p>
        </div>
        <div className="mt-11 px-10">
          <Swiper
            modules={[Autoplay]}
            className="custom-swiper top-swiper"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            initialSlide={-0}
          >
            {attractions.map((place, index) => (
              <SwiperSlide
                key={index}
                className="relative"
                style={{ cursor: "grab" }}
              >
                <div className="relative h-[516px] rounded-lg overflow-visible">
                  <Image
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover rounded-lg"
                    width={300}
                    height={516}
                    loading="lazy"
                  />
                </div>
                <Link
                  href={place.link}
                  className="absolute flex justify-between items-center bg-white top-3 w-96 max-w-[auto] left-1/2 transform -translate-x-1/2 py-3 px-6 rounded-full text-start shadow-md z-20"
                >
                  <div>
                    <h4
                      className="font-medium text-lg"
                      style={{ color: "#333333" }}
                    >
                      {place.name}
                    </h4>
                    <p className=" text-slate-500 text-sm">{place.distance}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                    style={{ color: "#A9A9A9" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
