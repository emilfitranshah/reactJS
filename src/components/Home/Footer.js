import React from 'react';

const Footer = props => {
  return (
    <div>
      <h4> Powered by Emil {props.name}</h4>
      <p>2018 {props.tahun} </p>
    </div>
  );
};
export default Footer;
