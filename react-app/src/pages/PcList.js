import React, { Component } from "react";
import axios from "axios";
export default class PcList extends Component {
  state = {
    data: [],
  };

  BASE_API_URL = "http://localhost:3008/";

  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "pc");
    console.log(response.data);
    this.setState({
      data: response.data,
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.data.map((each) => {
          return (
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  <h3>
                    {each.pcCase.brand}
                    {each.pcCase.series}
                  </h3>
                </h3>
                <h1>{each.email}</h1>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
