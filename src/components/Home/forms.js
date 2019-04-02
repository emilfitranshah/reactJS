import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { values: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
      alert("Pesan Input adalah : " + this.state.value);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        values={this.state.value}
        onChange={this.handleChange}
        />
        <input type="submit" values="Submit Data"/>
      </form>
    )
  }
}
export default Form;
