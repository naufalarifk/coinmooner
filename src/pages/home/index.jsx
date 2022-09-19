import React from "react";
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="mx-auto w-[50vw] mt-20">
      <p className="text-center text-white font-bold">THIS IS HOME YOU CAN NAVIGATE THROUGH HERE</p>
      <div className="flex flex-row justify-evenly mt-10">
    <Link className="border-2 p-4 hover:bg-gray-500 text-white" to="/tech-audit">Audit</Link>
    <Link className="border-2 p-4 hover:bg-gray-500 text-white" to="/kyc">KYC</Link>
      </div>
    </div>
  );
};

export default Home;
