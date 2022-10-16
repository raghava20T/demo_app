import React from "react";
import { cityIcon, clientIcon } from "../assets/index";

const Header = () => {
  return (
    <div className="rounded-full bg-paper-color custom-shadow flex px-5 py-2 gap-5 w-fit m-auto justify-center items-center mb-10">
      <div className="flex gap-5 items-center">
        <div className="bg-paper-color p-2 rounded-full flex justify-center items-center custom-shadow shrink-0">
          <img src={cityIcon} alt="cities" className="custom-text" />
        </div>
        <div className="text-sm flex flex-col">
          <span className="font-black custom-text leading-[13px]">50</span>
          <span className="font-bold text-black-color text-xs">Cities</span>
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <div className="bg-paper-color p-2 rounded-full flex justify-center items-center custom-shadow shrink-0">
          <img src={clientIcon} alt="clients" className="custom-text" />
        </div>
        <div className="text-sm flex flex-col">
          <p className="font-black custom-text leading-[13px]">60</p>
          <p className="font-bold text-black-color text-xs">Clinics</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
