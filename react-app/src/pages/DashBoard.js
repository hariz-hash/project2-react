import React, { Component } from "react";
import axios from "axios";
import Add from "./Add.js";
import Details from "./Details";
// import Details from "./Details.JS";
export class DashBoard extends Component {
  state = {
    data: [],
    isLoggedIn: false,
  };
  BASE_API_URL = "http://localhost:3008/";
  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
    this.setState({
      data: response.data,
    });
  }
  deleteCar = async (selectPcId) => {
    // console.log(c._id);
    let pcId = selectPcId._id;

    let response = await axios.delete(this.BASE_API_URL + "pc/" + pcId);

    console.log(response);
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Details />;
    }
    return <Add />;
    // return <React.Fragment>

    // </React.Fragment>;
  }
}
