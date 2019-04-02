import React, { Component }from 'react';
import "./header.css";

//CSS Internal //
const judul = {
  color:"orange",
  backgroundColor:"blue",
  marginTop:"100px"
}

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusrendering: true
    //  date: new date()
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

//HANDLING EVENTS PADA CLASS COMPONEN
handlePesan(value,e){
  e.preventDefault();//Fungsi dari preventDefault adalah untuk menghilangkan Loading
  alert(this.state.daftar);
  alert(value);
}
componentDidMount(){
  console.log("jalan : componentDidMount");
}

handleElement() {
  this.setState((state, props) => {
    return {statusrendering: !state.statusrendering };
  });
}
  render() {
    console.log("jalan : Render");
    console.log(this.state.statusrendering);
    return (
      <div>
        {this.state.statusrendering === true ? (
          //Css Inline
          <div>
            <h1 style={{color: "blue",
                backgroundColor: "orange",
                marginTop: "100px"
              }}
            >Selamat Datang </h1>
            <h2 style={judul}> Silahkan pilih Makanan </h2>
          </div>
        ) : (
          <div>
            <h1 id="JudulKedua"> Selamat Tinggal </h1>
            <h1 className="judulInfo"> Jangan Lupa Kembali </h1>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    )

//     return (
//       <div>
//         <h2> Makanan Khas Indonesia</h2>
//         <p>{this.state.daftar}</p>
//         <p>{this.state.dataList}</p>
//         <a href="/" onClick={(e)=> this.handlePesan("Pesan Dari Header",e)}>
//           Halaman Header
//         </a>
//       </div>
//     );
  }
}
export default Header;
