import React, { Component } from 'react';
import Header from "./Header";
import Top from "./Top";
// import Form from "./forms";
// import Main from "./Main";
import CustomInput from "./CustomInput";
import Footer from "./Footer";
//import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        <CustomInput />
        {
        // <Form/>
        // <Main/>
        }

        {
        // <List />
        }

        <Footer name ="Makanan Nusantara" tahun="1996" />
      </div>
    );
  }
}

export default App;
