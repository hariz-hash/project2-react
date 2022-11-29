import React, { Component } from "react";
import axios from "axios";
import "./PcList.css";
import * as Icon from "react-bootstrap-icons";

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
                          <Icon.Pc color="#70bb0d" size={20} />
                          &nbsp;
                          {each.pcCase.caseType}
                          {each.pcCase.motherBoardCompatibility} <br />
                          <Icon.Memory color="#70bb0d" size={20} /> &nbsp;
                          {each.ram.brand}
                          {each.ram.series} <br />
                          <Icon.Fan color="#70bb0d" size={20} /> &nbsp;
                          {each.coolingSystem.brand}&nbsp;
                          {each.coolingSystem.series}&nbsp;
                          {each.coolingSystem.coolingMethod}
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
