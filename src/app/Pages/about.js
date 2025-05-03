import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex items-center justify-center w-full min-h-screen"
      data-aos="fade-up"
      id="about"
    >
      <div className="max-w-xl relative mx-auto mb-40 bg-white rounded-lg justify-center px-9 py-9 items-start gap-9 shadow-lg">
        <div className="w-full flex-col relative">
          <div className="h-32 w-32 md:h-40 md:w-40 mb-11 md:mb-0 relative text-center right-0 md:right-[-80px] md:absolute top-0 md:top-[-80px] rounded-full overflow-hidden p-2 bg-primary mx-auto md:mx-0">
            <Image
              src="/about-host.png"
              alt="About Us"
              className="rounded-full h-full w-full object-cover"
              width={218}
              height={218}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <div className="flex flex-row items-center gap-4 mb-5">
              <p className="text-xl tracking-widest text-primary font-semibold">
                ABOUT THE HOST
              </p>
              <div className="bg-primary p-2 rounded-full">
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
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="w-full text-gray-700 leading-relaxed">
            As an avid traveler myself, I understand the importance of a
            comfortable and welcoming space to return to after a day of
            exploration. I value spending quality time with family & friends.
            <br />
            <br /> I understand the importance of creating memories with the
            people you love and want to provide a space for others to do the
            same. I strive to exceed expectations in every way and create a
            welcoming environment where you can relax, unwind & create lasting
            memories.
          </p>
        </div>
      </div>
    </section>
  );
}
