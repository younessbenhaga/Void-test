import React from "react";
import card_1 from "./pasted-graphic.webp";
import card_2 from "./pasted-graphic-1.webp";
import card_3 from "./pasted-graphic-2.webp";
function Decouvrir() {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 mt-32">
      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div className="">
          <img src={card_1} alt="card image" className="aspect-video" loading="lazy" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl">
            Rapport diversité, équité et inclusion
          </h3>
          <p className="text-sm text-[#0D0D0D] mt-3 leading-6">
            Au cours de la première année complète de notre nouvelle stratégie
            People & Culture, les enjeux de Diversité, Équité et Inclusion
            (DE&I) ont occupé le devant de la scène. Ce rapport célèbre les
            progrès concrets que nous avons réalisés pour refléter la diversité
            dans nos équipes dirigeantes, libérer tout le potentiel de nos
            collaborateurs et collaboratrices et avoir un impact sur
            l’environnement de travail mais aussi au-delà.
          </p>
          <button className="font-bold rounded mt-9 flex items-center gap-2">
            Lisez le document
            <span>
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5601 0.879883C10.0069 0.879883 9.56006 1.32676 9.56006 1.87988C9.56006 2.43301 10.0069 2.87988 10.5601 2.87988H13.1444L6.85381 9.17363C6.46318 9.56426 6.46318 10.1986 6.85381 10.5893C7.24443 10.9799 7.87881 10.9799 8.26943 10.5893L14.5601 4.29551V6.87988C14.5601 7.43301 15.0069 7.87988 15.5601 7.87988C16.1132 7.87988 16.5601 7.43301 16.5601 6.87988V1.87988C16.5601 1.32676 16.1132 0.879883 15.5601 0.879883H10.5601ZM3.06006 1.87988C1.67881 1.87988 0.560059 2.99863 0.560059 4.37988V14.3799C0.560059 15.7611 1.67881 16.8799 3.06006 16.8799H13.0601C14.4413 16.8799 15.5601 15.7611 15.5601 14.3799V10.8799C15.5601 10.3268 15.1132 9.87988 14.5601 9.87988C14.0069 9.87988 13.5601 10.3268 13.5601 10.8799V14.3799C13.5601 14.6549 13.3351 14.8799 13.0601 14.8799H3.06006C2.78506 14.8799 2.56006 14.6549 2.56006 14.3799V4.37988C2.56006 4.10488 2.78506 3.87988 3.06006 3.87988H6.56006C7.11318 3.87988 7.56006 3.43301 7.56006 2.87988C7.56006 2.32676 7.11318 1.87988 6.56006 1.87988H3.06006Z"
                  fill="#7A00E6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div>
          <img
            src={card_2}
            alt="card image"
            className="aspect-video"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl">Notre héritage</h3>
          <p className="text-sm text-[#0D0D0D] leading-6 mt-3">
            Notre societé d’aujourd’hui s’appuie sur un héritage qui consiste à
            transformer l’impossible en possible.
          </p>
          <button className="font-bold rounded mt-9 flex items-center gap-2 xl:absolute bottom-7 z-20">
            En savoir plus sur notre histoire
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

      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div className="relative">
          <img
            src={card_3}
            alt="card image"
            className="aspect-video"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl">Notre rapport intégré 2022</h3>
          <p className="text-sm text-[#0D0D0D] leading-6 mt-3">
            Découvrez comment nous rendons possible l'impossible pour améliorer
            la vie des gens dans le monde.
          </p>
          <button className="font-bold rounded mt-9 flex items-center gap-2 md:absolute bottom-7 z-20">
            Lire le rapport
            <span>
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5601 0.879883C10.0069 0.879883 9.56006 1.32676 9.56006 1.87988C9.56006 2.43301 10.0069 2.87988 10.5601 2.87988H13.1444L6.85381 9.17363C6.46318 9.56426 6.46318 10.1986 6.85381 10.5893C7.24443 10.9799 7.87881 10.9799 8.26943 10.5893L14.5601 4.29551V6.87988C14.5601 7.43301 15.0069 7.87988 15.5601 7.87988C16.1132 7.87988 16.5601 7.43301 16.5601 6.87988V1.87988C16.5601 1.32676 16.1132 0.879883 15.5601 0.879883H10.5601ZM3.06006 1.87988C1.67881 1.87988 0.560059 2.99863 0.560059 4.37988V14.3799C0.560059 15.7611 1.67881 16.8799 3.06006 16.8799H13.0601C14.4413 16.8799 15.5601 15.7611 15.5601 14.3799V10.8799C15.5601 10.3268 15.1132 9.87988 14.5601 9.87988C14.0069 9.87988 13.5601 10.3268 13.5601 10.8799V14.3799C13.5601 14.6549 13.3351 14.8799 13.0601 14.8799H3.06006C2.78506 14.8799 2.56006 14.6549 2.56006 14.3799V4.37988C2.56006 4.10488 2.78506 3.87988 3.06006 3.87988H6.56006C7.11318 3.87988 7.56006 3.43301 7.56006 2.87988C7.56006 2.32676 7.11318 1.87988 6.56006 1.87988H3.06006Z"
                  fill="#7A00E6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Decouvrir;
