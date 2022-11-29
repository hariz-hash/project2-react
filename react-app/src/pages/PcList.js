import React, { Component } from "react";
import axios from "axios";
import "./PcList.css";
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
        <div class="container">
          <div class="row">
            {this.state.data.map((each) => {
              return (
                <div className="col-lg-6 mb-1 ">
                  <div
                    className="card mt-3 border border-primary"
                    key={each._id}
                  >
                    <div className="card-body">
                      <h3 className="card-title">
                        {each.pcCase.brand}&nbsp;{each.pcCase.series}
                      </h3>
                      <div className="description">
                        <p>
                          {each.pcCase.caseType} &nbsp;
                          {each.pcCase.motherBoardCompatibility} <br />
                          {each.ram.brand}
                          {each.ram.series}
                        </p>
                        <p></p>
                        <p></p>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
