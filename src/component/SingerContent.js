import React from "react";

const SingerContent = ({ name, decription, price, picture, time, address }) => {
  return (
    <div className="singerContent">
      SingerContent
      {picture} <br />
      {name}
      <br />
      {price}
      <br />
      {decription}
      <br />
      {time}
      <br />
      {address}
      <br />
    </div>
  );
};

export default SingerContent;
