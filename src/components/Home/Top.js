import React from "react";

const Top = () => {
  //function handlePesan() { //Cara 1
  const handlePesan = (value,e) => { //Cara 2
    e.preventDefault();
    alert("Halaman Top Tampil");
    alert(value);
  };

return (
  <a href="/" onClick={(e) => handlePesan("Pesan dari Top",e)}>
    Halaman Top
  </a>
);
};
export default Top;
