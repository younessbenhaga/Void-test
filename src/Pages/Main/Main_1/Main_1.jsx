import React from "react";
import img1 from "./pasted-graphic.webp";

function Main_1() {
  return (
    <div className="xl:grid xl:grid-cols-12 flex flex-col-reverse -z-10">
      <div className="rounded-lg p-2 xl:col-span-5">
        <h2 className="text-2xl md:text-4xl font-bold leading-[54px]">
          Le drapeau de la lutte contre les méningites
        </h2>
        <p className="text-sm mt-5">
          Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo
          Curin, Davide Morana et plusieurs membres de la Meningitis Research
          Foundation / Confederation of Meningitis Organisations, le drapeau de
          la lutte contre les méningites vise à sensibiliser le public à une
          maladie qui reste encore, à ce jour, un problème majeur de santé
          publique à l’échelle mondiale.
        </p>
        <button className="font-bold rounded mt-6 flex items-center gap-2">
          En savoir plus
          <span>
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z"
                fill="#7A00E6"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className=" xl:col-span-7 p-2">
        <img
          src={img1}
          alt="image 1"
          className="max-h-[384px] w-full aspect-video rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Main_1;
