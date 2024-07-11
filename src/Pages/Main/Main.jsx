import React from "react";

import Main_1 from "./Main_1/Main_1";
import Main_2 from "./Main_2/Main_2";
import Main_3 from "./Main_3/Main_3";
import Card from "./Card/Card";
import Article from "./Article/Article";
import Information from "./Informations/Information";
import Decouvrir from "./Decouvrir/Decouvrir";
import Construire from "./Construire/Construire.jsx";
function Main() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-6xl mx-auto lg:mt-12 mt-[-30px]">
        {/* Partie----1-------11111111 */}
        <Main_1 />
        {/* Partie----2-------222222222 */}
        <Main_2 />
        {/* Partie----3-------333333333333 */}
        <Main_3 />

        {/* ---------Card list */}
        <Card />
        <hr className="mt-32 mx-auto w-full" color="#C9C9C9" />

        {/* ------------ Articles-----------*/}
        <Article />
        {/* ---------------infos------- */}
        <Information />
        {/* ---------------Découvrir---------- */}
        <Decouvrir />
        {/* -------------Construire------ */}
        <Construire />
      </div>
    </main>
  );
}

export default Main;
