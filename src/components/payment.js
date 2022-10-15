import React from "react";
import Layout from "../Layout/Layout";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCreditCard, AiOutlineWifi } from "react-icons/ai";
import { BsCamera, BsBank2 } from "react-icons/bs";
import Amazon from "../images/amazon-icon.svg";
import Gpay from "../images/google-pay-icon.webp";
import Phonepe from "../images/phonepe-logo-icon.webp";
import Paytm from "../images/Paytm-Logo.wine.png";
import Freecharge from "../images/freecharge.png";
import Mobi from "../images/mobi.png";

const Payment = () => {
  return (
    <Layout>
      <div className="bg-primary-color border border-slate-200 rounded-lg max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <div className="rounded-full bg-paper-color custom-shadow flex px-5 py-2 gap-5 w-fit m-auto justify-center items-center mb-10">
          <div className="flex gap-5 items-center">
            <div className="bg-paper-color p-2 rounded-full flex justify-center items-center custom-shadow shrink-0">
              <HiOutlineLocationMarker className="text-[#AD37E0]" />
            </div>
            <div className="text-sm flex gap-2">
              <p>50</p>
              <p>Cities</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="bg-paper-color p-2 rounded-full flex justify-center items-center custom-shadow shrink-0">
              <HiOutlineLocationMarker className="text-[#AD37E0]" />
            </div>
            <div className="text-sm flex gap-2">
              <p>60</p>
              <p>Clinics</p>
            </div>
          </div>
        </div>

        <div className="min-w-[300px] w-full max-w-[400px] h-[200px] custom-background rounded-[35px] m-auto mb-10 flex flex-col gap-5 p-6 text-white">
          <div className="flex justify-between gap-5">
            <p className="font-bold">Evelyn Tylor</p>
            <AiOutlineWifi className="text-2xl" />
          </div>
          <div className="flex justify-start gap-4 font-bold">
            <p>3215</p>
            <p>6584</p>
            <p>8468</p>
            <p>5888</p>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="text-sm">Expire</p>
              <p className="font-bold">12/24</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm">CVV</p>
              <p className="font-bold">229</p>
            </div>
            <div className="text-3xl italic flex items-end">VISA</div>
          </div>
        </div>

        <div className="flex flex-col mb-10">
          <p className="text-base">Choose Payment</p>
          <p className="text-[40px] font-bold">Method</p>
        </div>

        <ul className="flex flex-col w-full gap-5 payment__ul">
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between p-4 custom-shadow">
            <label>Pay Cash</label>
            <p>
              <BsCamera className="text-xl" />
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between p-4 custom-shadow">
            <label>Debit / Credit Card</label>
            <p>
              <AiOutlineCreditCard className="text-xl" />
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between p-4 custom-shadow">
            <label>UPI</label>
            <p className="flex gap-3">
              <img src={Amazon} alt="icon" width="18" height="18"></img>
              <img src={Gpay} alt="icon" width="22" height="10"></img>
              <img src={Phonepe} alt="icon" width="22" height="10"></img>
              <img src={Paytm} alt="icon" width="32" height="10"></img>
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between p-4 custom-shadow">
            <label>Wallet</label>
            <p className="flex gap-3">
              <img src={Freecharge} alt="icon" width="22" height="10"></img>
              <img src={Mobi} alt="icon" width="22" height="4"></img>
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between p-4 custom-shadow">
            <label>Net Banking</label>
            <p>
              <BsBank2 className="text-xl" />
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Payment;
