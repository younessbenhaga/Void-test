import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 z-50 work-sans-600 bg-white`}
    >
      <div className="flex xl:items-center justify-between py-5 px-8 text-black">
        <div className="xl:hidden">
          <div>
            <button
              id="bouton"
              onClick={toggleMenu}
              className="focus:outline-none w-8 h-8 bg-white cursor-pointer rounded-full opacity-60 transition-opacity duration-1000 hover:opacity-100"
            >
              <svg
                width={18}
                height={12}
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                  fill="#7A00E6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-3xl font-bold me-5 xl:hidden">Logo</div>

        <a href="#" className="rounded-full xl:hidden">
          <svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2699 8.7C16.2699 10.4213 15.7112 12.0113 14.7699 13.3013L19.5174 18.0525C19.9862 18.5212 19.9862 19.2825 19.5174 19.7513C19.0487 20.22 18.2874 20.22 17.8187 19.7513L13.0712 15C11.7812 15.945 10.1912 16.5 8.46992 16.5C4.16117 16.5 0.669922 13.0088 0.669922 8.7C0.669922 4.39125 4.16117 0.900002 8.46992 0.900002C12.7787 0.900002 16.2699 4.39125 16.2699 8.7ZM8.46992 14.1C11.4512 14.1 13.8699 11.6813 13.8699 8.7C13.8699 5.71875 11.4512 3.3 8.46992 3.3C5.48867 3.3 3.06992 5.71875 3.06992 8.7C3.06992 11.6813 5.48867 14.1 8.46992 14.1Z"
              fill="#7A00E6"
            />
          </svg>
        </a>

        <div
          className={`xl:flex xl:items-center bg-white w-full xl:w-auto hidden`}
        >
          <div className="text-3xl font-bold me-5">Logo</div>
          <a href="#" className="md:inline-block p-2">
            Notre Entreprise
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Notre science
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Votre Santé
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Partenariat
          </a>
        </div>
        <div
          className={`xl:flex xl:items-center bg-white w-full xl:w-auto hidden`}
        >
          <a href="#" className="md:inline-block p-2 ">
            Média
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Investisseurs
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Carrières
          </a>
          <a href="#" className="md:inline-block p-2 ">
            Partenariat Paris 2024
          </a>
          <a href="#" className="xl:inline-block p-2 px-5 rounded-full">
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2699 8.7C16.2699 10.4213 15.7112 12.0113 14.7699 13.3013L19.5174 18.0525C19.9862 18.5212 19.9862 19.2825 19.5174 19.7513C19.0487 20.22 18.2874 20.22 17.8187 19.7513L13.0712 15C11.7812 15.945 10.1912 16.5 8.46992 16.5C4.16117 16.5 0.669922 13.0088 0.669922 8.7C0.669922 4.39125 4.16117 0.900002 8.46992 0.900002C12.7787 0.900002 16.2699 4.39125 16.2699 8.7ZM8.46992 14.1C11.4512 14.1 13.8699 11.6813 13.8699 8.7C13.8699 5.71875 11.4512 3.3 8.46992 3.3C5.48867 3.3 3.06992 5.71875 3.06992 8.7C3.06992 11.6813 5.48867 14.1 8.46992 14.1Z"
                fill="#7A00E6"
              />
            </svg>
          </a>
          <a href="#" className="flex items-center gap-2">
            <span>
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.47 10.5C13.47 11.3325 13.425 12.135 13.3463 12.9H6.39377C6.31127 12.135 6.27002 11.3325 6.27002 10.5C6.27002 9.6675 6.31502 8.865 6.39377 8.1H13.3463C13.4288 8.865 13.47 9.6675 13.47 10.5ZM14.55 8.1H19.1663C19.365 8.86875 19.47 9.67125 19.47 10.5C19.47 11.3288 19.365 12.1313 19.1663 12.9H14.55C14.6288 12.1275 14.67 11.325 14.67 10.5C14.67 9.675 14.6288 8.8725 14.55 8.1ZM18.7725 6.9H14.3963C14.0213 4.50375 13.2788 2.4975 12.3225 1.215C15.2588 1.99125 17.6475 4.12125 18.7688 6.9H18.7725ZM13.1813 6.9H6.55877C6.78752 5.535 7.14002 4.3275 7.57127 3.34875C7.96502 2.46375 8.40377 1.8225 8.82752 1.4175C9.24752 1.02 9.59627 0.900002 9.87002 0.900002C10.1438 0.900002 10.4925 1.02 10.9125 1.4175C11.3363 1.8225 11.775 2.46375 12.1688 3.34875C12.6038 4.32375 12.9563 5.53125 13.1813 6.9ZM5.34377 6.9H0.96752C2.09252 4.12125 4.47752 1.99125 7.41752 1.215C6.46127 2.4975 5.71877 4.50375 5.34377 6.9ZM0.57377 8.1H5.19002C5.11127 8.8725 5.07002 9.675 5.07002 10.5C5.07002 11.325 5.11127 12.1275 5.19002 12.9H0.57377C0.37502 12.1313 0.27002 11.3288 0.27002 10.5C0.27002 9.67125 0.37502 8.86875 0.57377 8.1ZM7.57127 17.6475C7.13627 16.6725 6.78752 15.465 6.55877 14.1H13.1813C12.9525 15.465 12.6 16.6725 12.1688 17.6475C11.775 18.5325 11.3363 19.1738 10.9125 19.5788C10.4925 19.98 10.1438 20.1 9.87002 20.1C9.59627 20.1 9.24752 19.98 8.82752 19.5825C8.40377 19.1775 7.96502 18.5363 7.57127 17.6513V17.6475ZM5.34377 14.1C5.71877 16.4963 6.46127 18.5025 7.41752 19.785C4.47752 19.0088 2.09252 16.8788 0.96752 14.1H5.34377ZM18.7725 14.1C17.6475 16.8788 15.2625 19.0088 12.3263 19.785C13.2825 18.5025 14.0213 16.4963 14.4 14.1H18.7725Z"
                  fill="#7A00E6"
                />
              </svg>
            </span>
            Global
          </a>
        </div>
      </div>
      <div
        id="volet"
        className={`fixed top-0 left-0 w-full h-screen bg-white text-black transition-transform duration-1000 xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b-2 p-5 flex justify-between">
          <div className="text-lg font-semibold w-full text-center">Menu</div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-19lcw7p"
              focusable="false"
              width={25}
              height={25}
              aria-hidden="true"
              role="img"
              viewBox="0 0 320 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#7a00e6"
                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-scroll relative nav">
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Notre Entreprise
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Notre science
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Votre Santé
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Partenariat
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Média
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Investisseurs
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="border-b-2 p-5 flex justify-between">
            <a href="#" className="block">
              Carrières
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="p-5 flex justify-between">
            <a href="#" className="block">
              Partenariat Paris 2024
            </a>
            <div>
              <svg
                width={20}
                height={20}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1tfybzk"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NavigateNextIcon"
              >
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 bg-[#f5f5f5] w-full">
          <a href="#" className="flex items-center gap-2 p-5">
            <span>
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.47 10.5C13.47 11.3325 13.425 12.135 13.3463 12.9H6.39377C6.31127 12.135 6.27002 11.3325 6.27002 10.5C6.27002 9.6675 6.31502 8.865 6.39377 8.1H13.3463C13.4288 8.865 13.47 9.6675 13.47 10.5ZM14.55 8.1H19.1663C19.365 8.86875 19.47 9.67125 19.47 10.5C19.47 11.3288 19.365 12.1313 19.1663 12.9H14.55C14.6288 12.1275 14.67 11.325 14.67 10.5C14.67 9.675 14.6288 8.8725 14.55 8.1ZM18.7725 6.9H14.3963C14.0213 4.50375 13.2788 2.4975 12.3225 1.215C15.2588 1.99125 17.6475 4.12125 18.7688 6.9H18.7725ZM13.1813 6.9H6.55877C6.78752 5.535 7.14002 4.3275 7.57127 3.34875C7.96502 2.46375 8.40377 1.8225 8.82752 1.4175C9.24752 1.02 9.59627 0.900002 9.87002 0.900002C10.1438 0.900002 10.4925 1.02 10.9125 1.4175C11.3363 1.8225 11.775 2.46375 12.1688 3.34875C12.6038 4.32375 12.9563 5.53125 13.1813 6.9ZM5.34377 6.9H0.96752C2.09252 4.12125 4.47752 1.99125 7.41752 1.215C6.46127 2.4975 5.71877 4.50375 5.34377 6.9ZM0.57377 8.1H5.19002C5.11127 8.8725 5.07002 9.675 5.07002 10.5C5.07002 11.325 5.11127 12.1275 5.19002 12.9H0.57377C0.37502 12.1313 0.27002 11.3288 0.27002 10.5C0.27002 9.67125 0.37502 8.86875 0.57377 8.1ZM7.57127 17.6475C7.13627 16.6725 6.78752 15.465 6.55877 14.1H13.1813C12.9525 15.465 12.6 16.6725 12.1688 17.6475C11.775 18.5325 11.3363 19.1738 10.9125 19.5788C10.4925 19.98 10.1438 20.1 9.87002 20.1C9.59627 20.1 9.24752 19.98 8.82752 19.5825C8.40377 19.1775 7.96502 18.5363 7.57127 17.6513V17.6475ZM5.34377 14.1C5.71877 16.4963 6.46127 18.5025 7.41752 19.785C4.47752 19.0088 2.09252 16.8788 0.96752 14.1H5.34377ZM18.7725 14.1C17.6475 16.8788 15.2625 19.0088 12.3263 19.785C13.2825 18.5025 14.0213 16.4963 14.4 14.1H18.7725Z"
                  fill="#7A00E6"
                />
              </svg>
            </span>
            Global
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
