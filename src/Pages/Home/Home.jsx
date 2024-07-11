import React from "react";
import home_img from "./Home.webp";

function Home() {
  return (
    <section
      id="home"
      className="mt-[80px] work-sans-400 relative overflow-hidden flex flex-col-reverse lg:block"
    >
      <div className="lg:absolute w-full h-full flex items-center home_head">
        <div className="lg:grid lg:grid-cols-2 mx-auto">
          <div className="lg:w-[590px] p-8 mx-10 bg-white rounded-lg">
            <h1 className="lg:text-5xl font-bold lg:leading-[72px] text-3xl leading-[54px]">
              Journée des maladies rares 2024 : L'équité en action
            </h1>
            <p className="text-sm leading-6 mt-3">
              À l'occasion de la Journée des maladies rares, il est plus
              important que jamais de continuer à rechercher un diagnostic, une
              innovation, un soutien et un accès équitables pour les personnes
              atteintes de maladies rares.
            </p>
            <button className="py-3 px-6 bg-[#7A00E6] text-white rounded mt-4">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <img
        src={home_img}
        alt="home image"
        className="w-full max-h-[576px] object-cover -z-10"
      />
    </section>
  );
}

export default Home;
