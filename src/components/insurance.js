import React from "react";
import {
  exImageFour,
  exImageOne,
  exImageThree,
  exImageTwo,
  hdfcImage,
  heartBeat,
  insuranceImage,
  warningIcon,
  stethoscopeIcon,
} from "../assets";
import Header from "../common/Header";
import Layout from "../Layout/Layout";

const Insurance = () => {
  return (
    <Layout>
      <div className="bg-primary-color max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <Header />

        <h1 className="custom-text font-black text-[28px] mb-5">
          HDFC Life Insurance Company Ltd.
        </h1>

        <img src={insuranceImage} alt="img" className="rounded-[40px] mb-5" />

        <div className="flex gap-3 mb-5 items-center">
          <div className="bg-paper-color rounded-[20px] p-3 py-4 flex justify-center items-center min-w-[100px] hdfc__shadow">
            <img src={hdfcImage} alt="img" className="object-cover" />
          </div>
          <div className="font-normal text-[13px] py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </div>
        </div>

        <div className="font-normal text-[13px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </div>

        <div className="flex items-center justify-between gap-2 mb-10 flex-wrap gap-y-5">
          <div className="min-w-[170px] flex items-center rounded-[30px] custom-background gap-3 cursor-pointer justify-between buynow__shadow relative">
            <div className="bg-paper-color rounded-full p-2 heartBeat__shadow flex justify-center items-center shrink-0">
              <img src={heartBeat} alt="img" />
            </div>
            <p className="font-black text-[20px] text-white mr-5 whitespace-nowrap">
              BUY NOW
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between ">
              <p className="font-black text-[32px] leading-[28px] custom-text">
                40K
              </p>
              <div className="flex w-20 relative">
                <img src={exImageOne} alt="img" />
                <img src={exImageTwo} alt="img" className="absolute left-4" />
                <img src={exImageThree} alt="img" className="absolute left-8" />
                <img src={exImageFour} alt="img" className="absolute left-12" />
              </div>
            </div>
            <p className="font-bold text-[13px]">Insured Peoples</p>
          </div>
        </div>
      </div>

      <div className="max-w-[600px] w-full">
        <div className="bg-[#ECC0D9] mb-10">
          <div className="px-5 py-5">
            <h5 className="font-bold text-[16px]">Know The</h5>
            <div className="flex justify-between items-center flex-wrap mb-5 gap-3">
              <h2 className="font-black text-[40px] leading-8">Advantages</h2>
              <div className="w-20 h-2 rounded-[10px] bg-white overflow-hidden">
                <div className="w-10 slider__background relative"></div>
              </div>
            </div>

            <div className="flex items-center rounded-[40px] gap-3 justify-start bg-[#D73992] px-3 py-2.5 mb-5 advantage__shadow">
              <div className="bg-paper-color rounded-full p-4 flex justify-center items-center">
                <img src={warningIcon} alt="img" />
              </div>
              <p className="font-black text-[20px] text-white mr-5">
                Risk Management
              </p>
            </div>

            <div className="flex items-center rounded-[40px] gap-3 justify-start bg-[#ECC0D9] px-3 py-2.5 advantage__shadow">
              <div className="p-4 flex justify-center items-center">
                <img src={stethoscopeIcon} alt="img" />
              </div>
              <p className="font-black text-[20px] text-black mr-5">
                Freedom Of Choice
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5">
          <h5 className="font-bold text-[16px]">Buy</h5>
          <h2 className="font-black text-[40px] mb-5 leading-8">Insurance</h2>

          <input
            type="text"
            placeholder="Enter name"
            className="hdfc__shadow pl-5 py-2.5 rounded-[30px] px-3 outline-none mb-5 bg-paper-color
            placeholder:text-[#636363] placeholder:text-[16px] placeholder:font-semibold"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="hdfc__shadow pl-5 py-2.5 rounded-[30px] px-3 outline-none mb-5 bg-paper-color
            placeholder:text-[#636363] placeholder:text-[16px] placeholder:font-semibold"
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            min="10"
            className="hdfc__shadow pl-5 py-2.5 rounded-[30px] px-3 outline-none mb-5 bg-paper-color
            placeholder:text-[#636363] placeholder:text-[16px] placeholder:font-semibold"
          />

          <label className="advantage__checkbox mb-5 flex items-center w-fit">
            <input type="checkbox" className="mr-8 relative w-0" />I approve to
            contact me via email and phone number to discuss insurance
          </label>

          <button
            type="button"
            className="custom-background w-full font-black text-[20px] text-white py-2 rounded-[30px]"
          >
            BUY INSURANCE
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Insurance;
