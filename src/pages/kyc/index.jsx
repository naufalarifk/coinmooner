import React from "react";
import { useNavigate } from "react-router-dom";

const Kyc = () => {
  const navigate = useNavigate();
  const auditListArray = [
    {
      id: 1,
      name: "HODL",
      src: require("../../common/assets/images/audit-list/audit-asset (1).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 2,
      name: "Grizzly Rocket",
      src: require("../../common/assets/images/audit-list/audit-asset (3).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 3,
      name: "Bogged",
      src: require("../../common/assets/images/audit-list/audit-asset (12).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 4,
      name: "Samurai",
      src: require("../../common/assets/images/audit-list/audit-asset (1).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 5,
      name: "Avalant",
      src: require("../../common/assets/images/audit-list/audit-asset (2).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 6,
      name: "Olympus",
      src: require("../../common/assets/images/audit-list/audit-asset (3).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 7,
      name: "Cryptobee",
      src: require("../../common/assets/images/audit-list/audit-asset (4).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 8,
      name: "Inu",
      src: require("../../common/assets/images/audit-list/audit-asset (5).png"),
      type: "Complete KYC",
      audit: "Two of the 2 core team members have been KYC'd.",
    },
    {
      id: 9,
      name: "Readify",
      src: require("../../common/assets/images/audit-list/audit-asset (6).png"),
      type: "Complete KYC",
      audit:
        "Three of the 3 core team members have been KYC'd.",
    },
    {
      id: 10,
      name: "Fundex",
      src: require("../../common/assets/images/audit-list/audit-asset (7).png"),
      type: "Complete KYC",
      audit: "4 of the 4 core team members have been KYC'd.",
    },
    {
      id: 11,
      name: "ETHDAO",
      src: require("../../common/assets/images/audit-list/audit-asset (8).png"),
      type: "Complete KYC",
      audit: "One core team member have been KYC'd.",
    },
    {
      id: 12,
      name: "Melega",
      src: require("../../common/assets/images/audit-list/audit-asset (12).png"),
      type: "Complete KYC",
      audit:
        "Two of the 2 core team members have been KYC'd.",
    },
  ];
  return (
    <div className="container px-8 md:px-24">
      <button
        className="bg-[#4c3cce] p-2 rounded-lg mt-2"
        onClick={() => navigate(-1)}
      >
        <p className="font-bold text-white">Go Back</p>
      </button>
      <div className="flex flex-col gap-y-20 mt-2">
        <div className="flex flex-row items-center justify-center">
          {" "}
          <img
            src={require("../../common/assets/images/eth-icon.png")}
            className="h-[48px] w-[48px]"
            alt=""
          />
          <h1 className="text-white font-bold text-lg md:text-4xl text-start">
            KYC
          </h1>
        </div>
        <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {auditListArray.map((item) => (
              <div className="bg-[#282B35] rounded-lg p-4 space-y-2 flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <div className="font-semibold text-xl">
                    <h1 className="text-[#4c3cce]">{item.type}</h1>
                    <h1 className="text-white">{item.name}</h1>
                  </div>
                  <img src={item.src} className="h-[72px] w-[72px]" alt="" />
                </div>
                <h2 className="text-[#A7AEBF] font-semibold text-lg">
                  {item.audit}
                </h2>
                <div className="bg-[#4c3cce] rounded-lg p-3">
                  <p className="font-semibold text-center text-xl text-white">
                    Read Complete Report
                  </p>
                </div>
              </div>
            ))}
          </section>
      </div>
    </div>
  );
};

export default Kyc;
