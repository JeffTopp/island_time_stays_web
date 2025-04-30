import Link from "next/link";
import Image from "next/image";

export default function Properties() {
  return (
    <div>
      <section
        className="properties relative flex flex-col h-full mt-25 mb-25 justify-center bg-cover bg-center p-4"
        id="properties"
        data-aos="fade-up"
      >
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="text-xl tracking-widest text-primary font-semibold">
              PROPERTIES
            </p>
            <div className="bg-primary p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
          </div>
          <p className="w-full md:w-1/2 mx-auto mt-4">
            Choose from two spacious Island Park vacation rentals—Island Time
            Cabin and Island Time Retreat—both just minutes from Yellowstone.
            Perfect for families and groups, each stay features stunning views,
            private hot tubs, and easy access to fishing, hiking, snowmobiling,
            and more.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 w-auto mt-14 mx-auto">
          <Link href="/properties/1" className="relative property-card">
            <div className="card text-start relative">
              <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-6 p-4">
                <div className="flex flex-col w-full lg:w-auto gap-4 text-center items-center justify-center">
                  <Image
                    src="/home.jpeg"
                    className="rounded-lg w-full object-cover"
                    style={{ height: "auto", maxHeight: "200px" }}
                    width={300}
                    height={400}
                    alt="Property 1"
                    loading="lazy"
                  />
                  <div className="flex gap-3 mb-3 w-full lg:w-auto">
                    <Image
                      src="/island_time_cabin/9.jpeg"
                      className="rounded-lg w-full object-cover"
                      style={{ height: "auto", maxHeight: "150px" }}
                      width={600}
                      height={500}
                      alt="Property 1"
                      loading="lazy"
                    />
                    <Image
                      src="/island_time_cabin/19.jpeg"
                      className="rounded-lg w-full object-cover"
                      style={{ height: "auto", maxHeight: "150px" }}
                      width={600}
                      height={500}
                      alt="Property 1"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full lg:w-1/4">
                  <h4 className="card-title text-2xl font-medium text-black">
                    Island Time Cabin
                  </h4>
                  <p className="text-slate-500 mt-2">
                    5BR/3.5BA cabin just 30 minutes from Yellowstone! Sleeps 16
                    with 1 King, 6 Queens, and 2 Twins. Features include a game
                    room with a pool table, pop-a-shot, and arcade, a hot tub, a
                    basement bar, and a wrap-around deck. Enjoy a fully stocked
                    kitchen, a cozy fireplace, and an EV charger. Minutes from
                    Yellowstone, trails, lakes, and the river—perfect for
                    fishing, kayaking, ATVing, and snowmobiling. Ideal for
                    family vacations or group getaways year-round in the heart
                    of Island Park.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/properties/2" className="relative property-card">
            <div className="card text-start relative">
              <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-center items-center gap-6 p-4">
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                  <Image
                    src="/home2.png"
                    className="rounded-lg w-full object-cover"
                    style={{ height: "auto", maxHeight: "200px" }}
                    width={300}
                    height={300}
                    alt="Property 2"
                    loading="lazy"
                  />
                  <div className="flex gap-3 mb-3">
                    <Image
                      src="/island_time_retreat/51.jpeg"
                      className="rounded-lg w-full object-cover"
                      style={{ height: "auto", maxHeight: "150px" }}
                      width={600}
                      height={500}
                      alt="Property 2"
                      loading="lazy"
                    />
                    <Image
                      src="/island_time_retreat/24.jpeg"
                      className="rounded-lg w-full object-cover"
                      style={{ height: "auto", maxHeight: "150px" }}
                      width={600}
                      height={500}
                      alt="Property 2"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full lg:w-1/4">
                  <h4 className="card-title text-2xl font-medium text-black">
                    Island Time Retreat
                  </h4>
                  <p className="text-slate-500 mt-2">
                    Spacious 4BR/3BA cabin in Island Park, sleeping up to 14
                    guests. Just 25 minutes from Yellowstone, with a private hot
                    tub, fire pit, and stunning views of Sawtelle Mountain.
                    Enjoy fishing, hiking, boating, kayaking, tubing, ATVing,
                    and snowmobiling. Close to trails, lakes, and local
                    attractions for year-round adventure.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
