"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Reviews() {
  const [splitReviews, setSplitReviews] = useState([[], []]);
  const [showFullReview, setShowFullReview] = useState({});
  const swiperRef = useRef(null); // Use ref to manually control Swiper

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const filteredReviews = data.filter(
          (review) => Number(review.rating) === 5
        );
        const midpoint = Math.ceil(filteredReviews.length / 2);
        const firstHalf = filteredReviews.slice(0, midpoint);
        const secondHalf = filteredReviews.slice(midpoint);

        // Function to ensure there are enough slides by duplicating
        const ensureEnoughSlides = (reviews) => {
          const numberOfSlidesRequired = 6; // At least 6 slides are needed for loop mode
          const currentLength = reviews.length;

          // If there are fewer than 6 reviews, duplicate them until we have enough
          while (reviews.length < numberOfSlidesRequired) {
            reviews = [...reviews, ...reviews];
          }

          return reviews;
        };

        setSplitReviews([
          ensureEnoughSlides(firstHalf),
          ensureEnoughSlides(secondHalf),
        ]);
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const toggleFullReview = (id) => {
    setShowFullReview((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="px-10 md:px-40" id="reviews">
      <div className="text-center py-15">
        <div className="flex flex-row items-center justify-center gap-4 mb-5">
          <p className="text-xl tracking-widest text-primary font-semibold">
            REVIEWS
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
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
        </div>
        <p className="w-full md:w-1/2 mx-auto mt-4">
          Read what our guests have to say about their stay with us. We take
          pride in providing the best experience for our guests and are always
          looking for ways to improve. Your feedback is important to us.
        </p>
      </div>

      <div className="mt-11 px-0 lg:px-10 cursor-pointer flex flex-col gap-10">
        {[0, 1].map((index) => (
          <Swiper
            key={index}
            ref={swiperRef} // Attach the ref to Swiper
            modules={[Autoplay]}
            className={`custom-swiper ${
              index === 1 ? "rtl-swiper" : ""
            } w-full`}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: index === 1,
            }}
            speed={3000}
            freeMode={true}
          >
            {splitReviews[index].map((review, slideIndex) => {
              const reviewWords = review.text.split(" ");
              const isLongReview = reviewWords.length > 10;

              // Generate a unique key by combining review.id and slideIndex
              const uniqueKey = `${review.id}-${slideIndex}`;

              return (
                <SwiperSlide key={uniqueKey} className="mt-2 mb-3 px-3">
                  <div className="card text-start w-full">
                    <div
                      className="card-body bg-white p-6 rounded-xl w-full lg:w-1/1"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      }}
                    >
                      <div className="flex gap-4 items-center mb-3">
                        <div>
                          <Image
                            src={review.reviewer.profilePicture}
                            alt={review.reviewer.firstName}
                            className="w-14 h-14 rounded-full object-cover flex items-center justify-center"
                            width={56}
                            height={56}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-xl">
                            {review.reviewer.firstName}
                          </p>
                          <p className="font-normal text-slate-400 text-sm">
                            Guest
                          </p>
                        </div>
                      </div>
                      {isLongReview ? (
                        <p>
                          {showFullReview[review.id] ? (
                            <span
                              dangerouslySetInnerHTML={{ __html: review.text }}
                            />
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{
                                __html:
                                  reviewWords.slice(0, 20).join(" ") + "...",
                              }}
                            />
                          )}

                          <span
                            className="text-primary cursor-pointer font-bold ml-2 mt-3"
                            onClick={() => toggleFullReview(review.id)}
                          >
                            {showFullReview[review.id]
                              ? "See less"
                              : "See more"}
                          </span>
                        </p>
                      ) : (
                        <p dangerouslySetInnerHTML={{ __html: review.text }} />
                      )}
                      <span className="text-xs text-gray-600 flex gap-1 mt-5">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="size-6"
                            style={{
                              fill: starIndex < 5 ? "#F7A944" : "#59695d", // Always fills exactly 5 stars
                            }}
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                        ))}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ))}
      </div>
    </section>
  );
}
