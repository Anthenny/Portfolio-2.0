import React from "react";
import { Link } from "react-router-dom";

import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <main id="/" className="bg-main h-screen pt-[100px] relative object-cover">
      <img
        src="BgImage.jpg"
        alt="bg foto"
        className="absolute z-0 top-0 object-cover w-full h-full"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000]/40" />
      <div className="flex items-center justify-center h-full relative LayoutContainer mt-[-100px]">
        <div className="hidden xl:flex xl:flex-1" />
        <div className="xl:fkex-1">
          <h1 className="text-3xl">Anthenny de Hoon</h1>
          <p className="text-2xl text-detailsColor">Fullstack | Software Developer</p>
          <p className="text-xl py-4 w-full max-w-[600px]">
            Ik ben Anthenny en ik ben een full-stack junior developer. Ik ben woonachtig in de
            omgeving van Rotterdam. Mijn hobby is coderen en ik haal mijn voldoening uit het
            verbreden van mijn kennis en het leveren van goede projecten.
          </p>

          <p className="text-xl py-4 w-full max-w-[600px]">
            Op deze pagina kan je onder andere mijn vaardigheden en projecten zien. Als er nog meer
            vragen zijn kunt u mij bereiken via het contact formulier onderaan deze pagina.
          </p>
          <ul className="flex mt-5 justify-between w-full max-w-[600px]">
            <Link to="https://www.linkedin.com/in/anthenny-de-hoon-152b721b1/" target={"_blank"}>
              <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                <FaLinkedinIn
                  size={25}
                  className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                />
              </li>
            </Link>
            <Link to="https://github.com/Anthenny" target={"_blank"}>
              <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                <FiGithub
                  size={25}
                  className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                />
              </li>
            </Link>
            <Link to="https://www.instagram.com/anthennydehoon?igshd=ZDdkNTZiNTM" target={"_blank"}>
              <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                <FiInstagram
                  size={25}
                  className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
