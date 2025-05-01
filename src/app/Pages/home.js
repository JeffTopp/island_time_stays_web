"use client";

import Navbar from "../components/navbar.js";
import dynamic from "next/dynamic";
const MapHome = dynamic(
  () => import("../components/MapHome").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center"
        id="home"
        data-aos="fade-up"
        style={{
          backgroundImage:
            "url('/island_time_cabin/yellowstone-geo-thermal-email.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay p-0">
          <div className="rounded-2xl md:h-[100vh] p-4">
            <Navbar />
            <div className="flex flex-col xl:flex-row gap-5 w-full items-center md:items-start justify-center px-5 md:px-23 mt-18 md:mt-24">
              <div className="hidden xl:block me-4" id="graphics">
                <div className="flex gap-3 mb-8">
                  <img
                    src="/home.jpeg"
                    alt="image1"
                    className="rounded-lg w-full h-40"
                  />
                  <img
                    src="/island_time_retreat/37.jpeg"
                    alt="image2"
                    className="rounded-lg w-full h-40"
                  />
                </div>
                <MapHome
                  className="rounded-lg"
                  style={{ width: "100px", height: "200px" }}
                />
              </div>
              <div className="mx-auto text-start">
                <h1 className="text-3xl md:text-6xl leading-none sm:leading-[1.3] font-semibold text-white text-left pr-4 sm:pr-8 lg:pr-20">
                  Yellowstone Vacation Rentals by Island Time Stays.
                </h1>
                <p className="text-base md:text-lg font-medium text-white text-left mt-4 pr-4 sm:pr-8 lg:pr-20">
                  Stay in Island Park, Idaho—just minutes from Yellowstone
                  National Park. Enjoy cabins with hot tubs, scenic views, and
                  game rooms perfect for families and groups.
                </p>

                <div className="flex flex-col md:flex-row mt-8 gap-3">
                  <a
                    href="#properties"
                    className="btn btn-primary rounded-full px-8 py-4 text-center"
                  >
                    Book your stay
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-white rounded-full px-8 py-4 text-center justify-center flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
