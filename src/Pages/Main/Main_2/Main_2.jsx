import React from "react";
import img2 from "./pasted-graphic-1.webp";

function Main_2() {
  return (
    <div className="xl:grid xl:grid-cols-12 flex flex-col mt-32">
      <div className=" xl:col-span-7 p-2 relative">
        <img
          src={img2}
          alt="image 2"
          className="max-h-[384px] w-full aspect-video rounded-lg"
          loading="lazy"
        />
        <button className="Mybutton rounded-full h-[60px] w-[60px] bg-[#EFEFEF] flex items-center justify-center absolute top-1/2 left-1/2">
          <svg
            width={16}
            height={21}
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.35156 1.77349C2.77344 1.41802 2.04688 1.40631 1.45703 1.73834C0.867188 2.07037 0.5 2.69537 0.5 3.37506V17.1251C0.5 17.8047 0.867188 18.4297 1.45703 18.7618C2.04688 19.0938 2.77344 19.0782 3.35156 18.7266L14.6016 11.8516C15.1602 11.5118 15.5 10.9063 15.5 10.2501C15.5 9.59381 15.1602 8.99224 14.6016 8.64849L3.35156 1.77349Z"
              fill="#7A00E6"
            />
          </svg>
        </button>
      </div>
      <div className="rounded-lg p-2 xl:col-span-5">
        <h2 className="text-2xl md:text-4xl font-bold leading-[54px]">
          Les femmes au sein de Entreprise - Cristina
        </h2>
        <p className="text-sm mt-5">
          Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations
          de R&D en Amérique du Nord et l'une des nombreuses scientifiques
          inspirantes qui contribuent à renforcer la prochaine génération de
          femmes leaders dans le domaine de la santé et au-delà.
        </p>
        <button className="font-bold rounded mt-9 flex items-center gap-2">
          En savoir plus
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
  );
}

export default Main_2;
