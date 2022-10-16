import React from "react";
import {
  calendarRed,
  calendarWhite,
  cityIcon,
  clockWhite,
  demoImage,
  EllipseThree,
  rightArrow,
} from "../assets";
import Header from "../common/Header";
import Layout from "../Layout/Layout";

const UpcomingAppointments = () => {
  const appointments = [
    {
      doctor_name: "Dr. Johnathan Gray",
      treatment: "Dental Braces",
      date: "09 Nov, 10:00 am",
      place: "Faridabad",
    },
    {
      doctor_name: "Dr. Johnathan Gray",
      treatment: "Dental Braces",
      date: "09 Nov, 10:00 am",
      place: "Faridabad",
    },
  ];
  return (
    <Layout>
      <div className="bg-primary-color max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <Header />

        <h5 className="font-bold text-[16px]">Upcoming</h5>
        <h2 className="font-black text-[40px] mb-5 leading-8">Appointments</h2>

        <main className="w-full rounded-[30px] custom-background relative p-4 text-[#FFFFFF] mb-10 debit__card_shadow">
          <div className="flex justify-start gap-4 items-center w-full mb-5">
            <img src={demoImage} alt="icon" className="object-cover" />
            <div>
              <p className="font-black text-[20px]">Dr. Johnathan Gray</p>
              <p className="font-bold text-[16px]">Dental Braces</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 flex card__time_shadow  rounded-[30px] gap-5 flex-1 w-full">
              <div className="flex w-full items-center">
                <img src={calendarWhite} alt="icon" className="mr-2" />
                <p className="font-black text-[16px]">09 Nov, 22</p>
              </div>
              <div className="flex w-full items-center">
                <img src={clockWhite} alt="icon" className="mr-2 " />
                <p className="font-black text-[16px]">11:00 am</p>
              </div>
            </div>
            <div className="rounded-[30px] card__arrow_shadow px-4 py-3">
              <img src={rightArrow} alt="icon" />
            </div>
          </div>

          <div className="mb-4">
            <p className="font-extrabold text-[20px]">Dental Clinic</p>
            <p className="w-[200px]">
              12/2, Mathura Road, Sector 37, Faridabad - Delhi
            </p>
          </div>

          <div className="w-full flex justify-end gap-3 font-extrabold text-[12px]">
            <button
              type="button"
              className="px-6 py-2 rounded-[30px] card__button_cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-[30px] card__button_reschedule"
            >
              Reschedule
            </button>
          </div>
          <img
            src={EllipseThree}
            alt="icon"
            className="top-0 right-0 absolute"
          />
        </main>

        <h4 className="font-semibold text-[16px]">Next</h4>
        <div className="flex gap-6 flex-col">
          {appointments.map((each, i) => {
            return (
              <div className="next__appointment_card_shadow p-5 " key={i}>
                <div className="flex justify-start gap-4 items-center w-full mb-5">
                  <img src={demoImage} alt="icon" className="object-cover" />
                  <div>
                    <p className="font-black text-[20px]">{each.doctor_name}</p>
                    <p className="font-bold text-[16px]">{each.treatment}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center w-full flex-wrap">
                    <div className="p-2 flex  rounded-[30px] flex-1 w-full">
                      <div className="flex w-full items-center">
                        <img src={calendarRed} alt="icon" className="mr-2" />
                        <p className="font-black text-[13px] custom-text">
                          {each.date}
                        </p>
                      </div>
                      <div className="flex w-full items-center">
                        <img src={cityIcon} alt="icon" className="mr-2 w-3.5" />
                        <p className="font-black text-[13px] custom-text">
                          {each.place}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[30px] next__appointment_card_next_shadow px-4 py-2 flex text-white font-bold text-[12px] gap-3">
                      VIEW{" "}
                      <img
                        src={rightArrow}
                        alt="icon"
                        width="8px"
                        height="8px"
                      />
                    </div>
                  </div>
                </div>

                <div className="gap-5 flex">
                  <button
                    type="button"
                    className="text-black-color font-black font-[13px] rounded-[30px] next__appointment__button_shadow px-8 py-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-black-color font-black font-[13px] rounded-[30px] next__appointment__button_shadow px-8 py-3"
                  >
                    Reschedule
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default UpcomingAppointments;
