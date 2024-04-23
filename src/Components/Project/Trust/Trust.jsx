import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbMoneybag } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoUmbrellaOutline } from "react-icons/io5";
import "./Trust.css";

function Trust() {
  return (
    <div className='details'>
      <div className='first'><HiOutlineRocketLaunch />Free Shipping <h6>From 99.00</h6></div>
<div><TbMoneybag /> Money Guarantee <h6>30 days back</h6></div>
<div><GiWallet /> Payment method <h6>secure system</h6></div>
<div><FaHeadphonesAlt /> Online support <h6>24 hours</h6></div>
<div><IoUmbrellaOutline /> 100% safe <h6>secure shipping</h6></div>
    </div>
  )
}

export default Trust;
