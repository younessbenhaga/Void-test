import React from "react";

function Construire() {
  return (
    <div className="mt-16">
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="md:text-4xl text-2xl font-bold leading-[54px] text-center px-10">
          Construisez votre carrière avec Entreprise
        </h1>
        <p className="text-[#0D0D0D] mt-4">
          Vous serez surpris de voir tout ce que vous pouvez accomplir chez
          Entreprise. Découvrez votre avenir ici.
        </p>
        <div className="flex justify-center">
          <button className="rounded mt-6 flex items-center gap-2 bg-[#7A00E6] text-white py-3 px-6">
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
                  fill="#fff"
                />
              </svg>
            </span>
            Accéder au portail Carrières
          </button>
        </div>
      </div>
    </div>
  );
}

export default Construire;
