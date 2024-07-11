import React from "react";
import card_1 from "./pasted-graphic-4.webp";
import card_2 from "./pasted-graphic-7.webp";
import card_3 from "./pasted-graphic-6.webp";
function Card() {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 mt-32">
      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div className="relative">
          <img src={card_1} alt="card image" className="aspect-video" loading="lazy"/>
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
        <div className="p-6">
          <h3 className="font-bold text-2xl">Virus VS Bacteria</h3>
          <p className="text-sm text-[#0D0D0D] mt-3 leading-6">
            Ils font partie de votre vie, mais les connaissez-vous vraiment ?
            Nos scientifiques vous expliquent les principales différences entre
            un virus et une bactérie.
          </p>
          <button className="font-bold rounded mt-9 flex items-center gap-2 md:absolute bottom-7 z-20">
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

      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div>
          <img src={card_2} alt="card image" className="aspect-video" loading="lazy" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl">
            Le parcours B Corp de Notre Santé Grand Public
          </h3>
          <p className="text-sm text-[#0D0D0D] leading-6">
            En obtenant la certification B Corp pour Entreprise Santé Grand
            Public en Amérique du Nord, en Allemagne, en Italie et en Amérique
            latine, nous faisons partie d'une communauté mondiale qui transforme
            le monde des affaires en une force pour le bien.
          </p>
          <button className="font-bold rounded mt-9 flex items-center gap-2 xl:absolute bottom-7 z-20">
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

      <div className="border border-[#C9C9C9] rounded-lg relative overflow-hidden">
        <div className="relative">
          <img src={card_3} alt="card image" className="aspect-video" loading="lazy" />
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
        <div className="p-6">
          <h3 className="font-bold text-2xl">
            Maladie du sommeil : Ne laisser personne de côté
          </h3>
          <p className="text-sm text-[#0D0D0D] leading-6">
            Maladie tropicale négligée, la maladie du sommeil est généralement
            mortelle en l'absence de traitement. Les patients infectés par la
            variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont
            malheureusement bénéficié que de peu d'innovations en matière de
            traitement. Mais l'espoir pointe à l'horizon. Pour ces patients,
            nous voyons le potentiel du premier traitement oral pour cette
            variante de la maladie, soutenant ainsi l'objectif d'élimination de
            la maladie du sommeil chez l’humain d'ici 2030.
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
    </div>
  );
}

export default Card;
