import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <ol>
        <Image linkgambar="https://d18uhd91svii7m.cloudfront.net/wp-content/uploads/2018/07/11174141/bk.jpg" lebar ="500" />
        <li>Burger</li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar ="400"/>
        <li>Spagetti</li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"lebar ="300" />
        <li>Pasta</li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar ="200"/>
      </ol>
    );
  }
}
export default List;
