import React, { Component } from "react";
import menuMakanan from "./lib/food";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputkota:"",
      // menuMakanan: [
      //   //Array Of Object
      //   {
      //     nama: "Mie Ayam",
      //     harga: 15000
      //   },
      //   {
      //     nama: "Bakso",
      //     harga: 13000
      //   },
      //   {
      //     nama: "Soto",
      //     harga: 5000
      //   }
      // ]
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // rubahData(){ //                                  Cara 1
  //   this.setState({title: "Pilih Makanan"});
  // }

  rubahData() {
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title
      };
      // // return { title: "Pilih Menu Makanan",
      // //           title2: "Pilih Menu Minuman"
      // };
      });
  }

  handleChange(value,e){
    //this.setState({ inputValue: e.target.value }); //Menghubungkan State dan Input Value Cara 1

    //Menghubungkan state dan input value cara 2
    const eventTarget = e.target.value;
    this.setState((state, props) => {
      return {
        [value]: eventTarget
      };
    });
    }

  render(){
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>
        <br/>
        <br/>
        <input
          type="text"
          value={this.state.inputValue}//Set Default Input Value//
          onChange={(e)=>this.handleChange("inputValue",e)}
          placeholder = "nama"
        />
        <input
          type="text"
          value ={this.state.inputkota}
          onChange={(e)=>this.handleChange("inputkota",e)}
          placeholder = "kota"

        />
        {menuMakanan.map((value, index) => {
          console.log(value);
          console.log(index);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>harga : {value.harga }</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export  default Main;
