import React from "react";
import { Link } from "react-router-dom";
const SingerContent = ({ name, decription, price, picture, time, address }) => {
  return (
    <Link className="Link">
      <div className="singerContent">
        <img src="picture/a2.jpg" alt="" />
        <p className="p-name">Name: Assssssssssss</p>
        <p className="p-d">Decription: Noice</p>
        <p className="p-p">Price: 450000$</p>
        <i class="fas fa-briefcase"> 4 phút trước TP-HCM</i>
      </div>
    </Link>
  );
};

export default SingerContent;
