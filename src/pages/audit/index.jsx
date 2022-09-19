import React from "react";
import { useNavigate } from "react-router-dom";
const TokenAudit = () => {
  const navigate = useNavigate();
  const whyUsArray = [
    {
      id: 1,
      src: require("../../common/assets/images/how-we-work/globe.png"),
      desc: "We prove the reliability and correctness of different smart constracts across the board by in-depth analysis of the smart contract codebase and architecture",
    },
    {
      id: 2,
      src: require("../../common/assets/images/how-we-work/processor.png"),
      desc: "Rigorous testing of the project, code design pattern analytics to ensure it is well-structured and third-party contracts and libraries are used in a safe way.",
    },
    {
      id: 3,
      src: require("../../common/assets/images/how-we-work/payment.png"),
      desc: "To fully audit a smart contract, we must first comprehend what the smart contract is intended to achieve and how the developers have implemented this functionality. Our team does this through interactions with the technical team and early code scans.",
    },
    {
      id: 4,
      src: require("../../common/assets/images/how-we-work/server.png"),
      desc: "Initially, a portion of our team (2 to 4 blockchain engineers) will evaluate the smart contract line by line and identify logical mistakes, possible optimizations, and maybe severe concerns.",
    },
    {
      id: 5,
      src: require("../../common/assets/images/how-we-work/security.png"),
      desc: "The same team will next initiate a testing procedure to evaluate the smart contract's functionality and its resistance to attacks.",
    },
    {
      id: 6,
      src: require("../../common/assets/images/how-we-work/phone.png"),
      desc: "In the end a detailed report with description of the smart contract protocol, the methodologies used to analyze it, a complete list of the problems identified, as well as potential solutions and code snippets are generated.",
    },
  ];

  const auditListArray = [
    {
      id: 1,
      name: "HODL",
      src: require("../../common/assets/images/audit-list/audit-asset (1).png"),
      type: "BEP20 Smart-contract",
      audit: "No issues.",
    },
    {
      id: 2,
      name: "Grizzly Rocket",
      src: require("../../common/assets/images/audit-list/audit-asset (3).png"),
      type: "BEP20 Smart-contract",
      audit: "Two medium severity issues. One minor severity issues.",
    },
    {
      id: 3,
      name: "Bogged",
      src: require("../../common/assets/images/audit-list/audit-asset (12).png"),
      type: "BEP20 Smart-contract",
      audit: "Two medium severity issues.",
    },
    {
      id: 4,
      name: "Samurai",
      src: require("../../common/assets/images/audit-list/audit-asset (1).png"),
      type: "BEP20 Smart-contract",
      audit: "One medium severity issues.",
    },
    {
      id: 5,
      name: "Avalant",
      src: require("../../common/assets/images/audit-list/audit-asset (2).png"),
      type: "BEP20 Smart-contract",
      audit: "One minor severity issues.",
    },
    {
      id: 6,
      name: "Olympus",
      src: require("../../common/assets/images/audit-list/audit-asset (3).png"),
      type: "BEP20 Smart-contract",
      audit: "Two medium severity issues. One minor severity issues.",
    },
    {
      id: 7,
      name: "Cryptobee",
      src: require("../../common/assets/images/audit-list/audit-asset (4).png"),
      type: "BEP20 Smart-contract",
      audit: "One medium severity issues. Two minor severity issues.",
    },
    {
      id: 8,
      name: "Inu",
      src: require("../../common/assets/images/audit-list/audit-asset (5).png"),
      type: "BEP20 Smart-contract",
      audit: "Two medium severity issues. Two minor severity issues.",
    },
    {
      id: 9,
      name: "Readify",
      src: require("../../common/assets/images/audit-list/audit-asset (6).png"),
      type: "BEP20 Smart-contract",
      audit:
        "Three medium severity issues. One minor severity issues. One informational issue.",
    },
    {
      id: 10,
      name: "Fundex",
      src: require("../../common/assets/images/audit-list/audit-asset (7).png"),
      type: "BEP20 Smart-contract",
      audit: "Three medium severity issues. One informational issue.",
    },
    {
      id: 11,
      name: "ETHDAO",
      src: require("../../common/assets/images/audit-list/audit-asset (8).png"),
      type: "BEP20 Smart-contract",
      audit: "Three medium severity issues. Two minor severity issues.",
    },
    {
      id: 12,
      name: "Melega",
      src: require("../../common/assets/images/audit-list/audit-asset (12).png"),
      type: "BEP20 Smart-contract",
      audit:
        "Three medium severity issues. Two minor severity issues. One informational issue.",
    },
  ];

  return (
    <div className="container px-8 md:px-24">
      <button
        className="bg-[rgb(245,194,73)] p-2 rounded-lg mt-2"
        onClick={() => navigate(-1)}
      >
        <p className="bg-[#F5C249] font-bold text-white">Go Back</p>
      </button>
      <div className="flex flex-col gap-y-20">
        <section className="mx-auto items-center space-y-3 flex flex-row w-full lg:w-[80%]">
          <img
            src={require("../../common/assets/images/manpose-5.png")}
            alt="safety-audit"
            className="md:h-[300px] md:w-[300px] w-[150px] h-[150px]"
          />
          <div>
            <p className="text-white font-bold text-lg md:text-4xl text-start">
              Smart Contract Audit
            </p>
            <p className="text-[#A7AEBF] font-bold text-xs md:text-xl mt-1 md:mt-4">
              Get your smart contracts verified by us - a team of blockchain
              engineers & analysts specialized in blockchain technology
            </p>
          </div>
        </section>
        <section className="mx-auto items-center space-y-3">
          <h1 className="text-white font-bold text-center text-4xl">
            How We Work
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {whyUsArray.map((item) => (
              <div className="rounded-lg">
                <img
                  src={item.src}
                  alt=""
                  className="h-[220px] w-[220px] mx-auto"
                />
                <p className="text-[#A7AEBF] font-bold text-center text-xs mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          {" "}
          <div className="flex flex-row items-center justify-center">
            <img
              src={require("../../common/assets/images/eth-icon.png")}
              className="h-[48px] w-[48px]"
              alt=""
            />
            <h1 className="text-center text-4xl text-white font-bold">AUDIT</h1>
          </div>
          <p className="text-[#A7AEBF] font-bold text-center text-2xl mt-6">
            This page is a listing of all audits conducted by CoinMooner
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {auditListArray.map((item) => (
              <div className="bg-[#282B35] rounded-lg p-4 space-y-2 flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <div className="font-semibold text-xl">
                  <h1 className="text-[#F5C249]">{item.type}</h1>
                  <h1 className="text-white">{item.name}</h1>
                  </div>
                  <img src={item.src} className="h-[72px] w-[72px]" alt="" />
                </div>
                <h2 className="text-[#A7AEBF] font-semibold text-lg">{item.audit}</h2>
                <div className="bg-[#F5C249] rounded-lg p-3"><p className="font-semibold text-center text-xl">Read Complete Report</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TokenAudit;
