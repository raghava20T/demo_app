import React from "react";
import { demoImage, rightArrow } from "../assets";
import Header from "../common/Header";
import Layout from "../Layout/Layout";

const PreviousAppointments = () => {
  const appointments = [
    {
      doctor_name: "Dr. Johnathan Gray",
      treatment: "Dental Braces",
      date: "09 Nov, 10:00 am",
      status: "Completed",
      amount: "1000",
    },
    {
      doctor_name: "Dr. Johnathan Gray",
      treatment: "Dental Braces",
      date: "09 Nov, 10:00 am",
      status: "Pending",
      amount: "1000",
    },
    {
      doctor_name: "Dr. Johnathan Gray",
      treatment: "Dental Braces",
      date: "09 Nov, 10:00 am",
      status: "Rescheduled",
      amount: "1000",
    },
  ];
  return (
    <Layout>
      <div className="bg-primary-color max-w-[600px] flex flex-col justify-center w-full px-5 py-5">
        <Header />

        <h5 className="font-bold text-[16px]">Previous</h5>
        <h2 className="font-black text-[40px] mb-5 leading-8">Appointments</h2>

        <div className="flex gap-6 flex-col">
          {appointments.map((each, i) => {
            return (
              <div className="next__appointment_card_shadow p-5 " key={i}>
                <div className="flex justify-start gap-4 items-center w-full mb-5 relative">
                  <img src={demoImage} alt="icon" className="object-cover" />
                  <div>
                    <p className="font-black text-[20px]">{each.doctor_name}</p>
                    <p className="font-bold text-[16px]">{each.treatment}</p>
                    <p className="font-bold text-[16px]">{each.date}</p>

                    <div className="absolute bottom-4 right-0 rounded-[30px] w-7 h-7 flex justify-center cursor-pointer overflow-hidden items-center next__appointment_card_next_shadow">
                      <img
                        src={rightArrow}
                        alt="icon"
                        width="8px"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-between items-center flex-wrap">
                  <p
                    className={`font-extrabold text-[20px] ${
                      each.status === "Completed"
                        ? "custom-text"
                        : "text-[#EE2B3B]"
                    }`}
                  >
                    {each.status}
                  </p>
                  <div className="custom-background px-4 py-1 rounded-[30px] font-extrabold text-[16px] text-white flex items-center">
                    {each.status === "Completed" ? "Paid" : "Total"} - Rs.{" "}
                    {each.amount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default PreviousAppointments;
