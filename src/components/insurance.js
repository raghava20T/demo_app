import React from "react";
import {
  exImageFour,
  exImageOne,
  exImageThree,
  exImageTwo,
  hdfcImage,
  heartBeat,
  insuranceImage,
} from "../assets";
import Header from "../common/Header";
import Layout from "../Layout/Layout";

const Insurance = () => {
  return (
    <Layout>
      <div className="bg-primary-color rounded-lg max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <Header />

        <h1 className="custom-text font-black text-[28px] mb-5">
          HDFC Life Insurance Company Ltd.
        </h1>

        <img src={insuranceImage} alt="img" className="rounded-[40px] mb-5" />

        <div className="flex gap-3 mb-5 items-center">
          <div className="bg-paper-color rounded-[20px] p-3 py-4 flex justify-center items-center min-w-[100px] hdfc__shadow">
            <img src={hdfcImage} alt="img" />
          </div>
          <div className="font-normal text-[13px] py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </div>
        </div>

        <div className="font-normal text-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center rounded-[30px] custom-background gap-3 cursor-pointer justify-between buynow__shadow relative">
            <div className="bg-paper-color rounded-full p-2 heartBeat__shadow flex justify-center items-center">
              <img src={heartBeat} alt="img" />
            </div>
            <p className="font-black text-[20px] text-white mr-5">BUY NOW</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between ">
              <p className="font-black text-[32px] leading-[28px] custom-text">
                40K
              </p>
              <div className="flex">
                <img src={exImageOne} alt="img" />
                <img src={exImageTwo} alt="img" className="relative -left-3" />
                <img
                  src={exImageThree}
                  alt="img"
                  className="relative -left-5"
                />
                <img src={exImageFour} alt="img" className="relative -left-8" />
              </div>
            </div>
            <p className="font-bold text-[13px]">Insured Peoples</p>
          </div>
        </div>
      </div>

      <div></div>
    </Layout>
  );
};

export default Insurance;
