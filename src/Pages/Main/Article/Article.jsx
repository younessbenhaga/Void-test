import React, { useState, useEffect } from "react";
import article1 from "./pasted-graphic-8.webp";
import article2 from "./pasted-graphic-9.webp";
import article3 from "./pasted-graphic-10.webp";
import { useSwipeable } from "react-swipeable";

function Article() {
  const articles = [
    {
      img: article1,
      category: "Notre Science",
      date: "5 juin 2024",
      title: "« Sur la piste », notre websérie scientifique à l’esprit sport",
    },
    {
      img: article2,
      category: "Notre Science",
      date: "19 mai 2024",
      title: "Sanofi accélère sur l’IA à VivaTech",
    },
    {
      img: article3,
      category: "Notre Science",
      date: "5 février 2024",
      title: "Cancer et travail: Agir ensemble",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (windowWidth >= 1440) {
      setCurrentIndex(0);
    } else if (windowWidth >= 768) {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(articles.length / 2) - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (windowWidth >= 1440) {
      setCurrentIndex(0);
    } else if (windowWidth >= 768) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Math.ceil(articles.length / 2) - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? articles.length - 1 : prevIndex - 1
      );
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    windowWidth >= 768
      ? currentIndex === Math.ceil(articles.length / 2) - 1
      : currentIndex === articles.length - 1;

      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Allows mouse events to be tracked as well as touch events
      });

  return (
    <div className="relative">
      <div className="lg:flex justify-between items-center py-5 px-4">
        <h2 className="text-2xl font-bold">Entreprise Today</h2>
        <button className="font-semibold rounded flex items-center gap-4">
          Lisez nos derniers articles
          <span>
            <svg
              width={15}
              height={13}
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1162 6.95627C14.5068 6.56565 14.5068 5.93127 14.1162 5.54065L9.11616 0.540649C8.72554 0.150024 8.09116 0.150024 7.70054 0.540649C7.30991 0.931274 7.30991 1.56565 7.70054 1.95627L10.9974 5.25002H1.40991C0.856787 5.25002 0.409912 5.6969 0.409912 6.25002C0.409912 6.80315 0.856787 7.25002 1.40991 7.25002H10.9943L7.70366 10.5438C7.31304 10.9344 7.31304 11.5688 7.70366 11.9594C8.09429 12.35 8.72866 12.35 9.11929 11.9594L14.1193 6.9594L14.1162 6.95627Z"
                fill="#7A00E6"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="relative">
        <div
        {...swipeHandlers}
          className="flex transition-transform duration-300 gap-3 p-6 lg:grid lg:grid-cols-3 lg:gap-2 lg:mt-3"
          style={{
            transform: `translateX(-${
              windowWidth >= 1440
                ? 0
                : currentIndex * (windowWidth >= 768 ? 100 : 73)
            }%)`,
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-9/12 md:w-1/2 lg:w-full flex-shrink-0 min-h-[460px]"
            >
              <div className="rounded-lg overflow-hidden border border-[#C9C9C9] h-full relative">
                <img
                  src={article.img}
                  alt="article image"
                  className="aspect-video"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-[#434343] text-sm font-normal">
                    {article.category}
                  </p>
                  <p className="text-[#434343] text-sm font-normal pb-4">
                    {article.date}
                  </p>
                  <h3 className="md:text-2xl text-lg leading-7 md:leading-9 font-bold">
                    {article.title}
                  </h3>
                  <button className="font-bold rounded mt-6 flex items-center gap-2 text-sm absolute bottom-3">
                    Lire l'article
                    <span>
                      <svg
                        width={15}
                        height={13}
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1162 6.95627C14.5068 6.56565 14.5068 5.93127 14.1162 5.54065L9.11616 0.540649C8.72554 0.150024 8.09116 0.150024 7.70054 0.540649C7.30991 0.931274 7.30991 1.56565 7.70054 1.95627L10.9974 5.25002H1.40991C0.856787 5.25002 0.409912 5.6969 0.409912 6.25002C0.409912 6.80315 0.856787 7.25002 1.40991 7.25002H10.9943L7.70366 10.5438C7.31304 10.9344 7.31304 11.5688 7.70366 11.9594C8.09429 12.35 8.72866 12.35 9.11929 11.9594L14.1193 6.9594L14.1162 6.95627Z"
                          fill="#7A00E6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`absolute right-20 transform h-10 w-10 mx-2 border-2 border-[#7A00E6] text-[#7A00E6] rounded-full lg:hidden flex items-center justify-center rotate-180	 ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          <svg
            width={15}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right elements-ds-8xk1se"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
        <button
          className={`absolute right-10 transform h-10 w-10 border-2 border-[#7A00E6] text-[#7A00E6] rounded-full lg:hidden flex items-center justify-center ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <svg
            width={15}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right elements-ds-8xk1se"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-start md:justify-center space-x-2 mt-4 lg:hidden">
        {windowWidth >= 768 ? (
          Array.from({ length: Math.ceil(articles.length / 2) }).map(
            (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full border border-[#7A00E6] ${
                  currentIndex === index ? "bg-purple-700" : "bg-white"
                }`}
              ></div>
            )
          )
        ) : (
          <div className="px-4">
            {currentIndex + 1}/{articles.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
