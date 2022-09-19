import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const Kyc = () => {
    const navigate = useNavigate();
  return (
    <>
    <button onClick={() =>navigate(-1)}><p>KYC</p></button>
    </>
  )
}

export default Kyc