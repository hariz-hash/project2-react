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
                <div className="col-lg-6  ">
                  <div className="card  border-0 mt-3" key={each._id}>
                    <div className="card-body">
                      <h3 className="card-title">
                        {each.pcCase.brand}&nbsp;{each.pcCase.series}
                      </h3>
                      <div className="description">
                        <p>
                          <i className="bi bi-pc"></i>
                          {each.pcCase.caseType} &nbsp;
                          {each.pcCase.motherBoardCompatibility} <br />
                          {each.ram.brand}
                          {each.ram.series}
                        </p>
                      </div>
                    </div>
                    <button type="button" class="btn rounded-0 ">
                      Primary
                    </button>
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
