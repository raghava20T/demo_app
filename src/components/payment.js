import React from "react";
import Layout from "../Layout/Layout";
import {
  AmazonIcon,
  CreditCardIcon,
  EllipseOne,
  EllipseTwo,
  freechargeIcon,
  gpayIcon,
  mobiIcon,
  PayCashIcon,
  paytmIcon,
  phonepeIcon,
  visaIcon,
  wifiIcons,
  BankIcon,
} from "../assets/index";
import Header from "../common/Header";

const Payment = () => {
  return (
    <Layout>
      <div className="bg-primary-color max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <Header />

        <div className="min-w-[200px] w-full max-w-[400px] h-[200px] debit__card_shadow rounded-[35px] m-auto mb-10 flex flex-col p-6 text-white relative">
          <div className="flex justify-between gap-5 mb-5">
            <p className="font-extrabold text-base">Evelyn Tylor</p>
            <img src={wifiIcons} alt="icon" />
          </div>
          <div className="flex justify-start gap-4 font-extrabold text-xl mb-6">
            <p>3215</p>
            <p>6584</p>
            <p>8468</p>
            <p>5888</p>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-[10px]">Expire</p>
              <p className="font-extrabold">12/24</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[10px]">CVV</p>
              <p className="font-extrabold">229</p>
            </div>
            <div class="flex items-end">
              <img src={visaIcon} alt="icon" />
            </div>
          </div>

          <img
            src={EllipseOne}
            alt="icon"
            className="absolute left-0 top-[32%]"
          />
          <img
            src={EllipseTwo}
            alt="icon"
            className="absolute -right-2 -top-[10%]"
          />
        </div>

        <div className="flex flex-col mb-5">
          <p className="text-base font-bold leading-[16px]">Choose Payment</p>
          <p className="text-[40px] font-black leading-[40px]">Method</p>
        </div>

        <ul className="flex flex-col w-full gap-5 payment__ul relative">
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between items-center p-4 custom-shadow">
            <label>Pay Cash</label>
            <PayCashIcon />
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between items-center p-4 custom-shadow">
            <label>Debit / Credit Card</label>
            <CreditCardIcon />
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between items-center p-4 custom-shadow">
            <label className="w-full">UPI</label>
            <p className="flex gap-3 justify-end w-full">
              <img src={AmazonIcon} alt="icon" width="20" height="20"></img>
              <img src={gpayIcon} alt="icon" width="20" height="20"></img>
              <img src={phonepeIcon} alt="icon" width="20" height="20"></img>
              <img src={paytmIcon} alt="icon" width="30" height="30"></img>
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between items-center p-4 custom-shadow">
            <label className="w-full">Wallet</label>
            <p className="flex gap-3 justify-end w-full">
              <img src={freechargeIcon} alt="icon" width="20" height="20"></img>
              <img src={mobiIcon} alt="icon" width="20" height="20"></img>
            </p>
          </li>
          <li className="w-full rounded-full bg-paper-color flex gap-5 justify-between items-center p-4 custom-shadow">
            <label>Net Banking</label>
            <BankIcon />
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Payment;
