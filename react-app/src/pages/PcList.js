import React, { Component } from "react";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import "./PcList.css";

export class PcList extends Component {
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
        <div className="container">
          <div className="row">
            {this.state.data.map((each) => {
              return (
                <div className="col-lg-6  ">
                  <div className="card  border-0 mt-3" key={each._id}>
                    <div className="card-body">
                      <h3 className="card-title">{each.pcCase}</h3>
                      <div className="description">
                        <p>CPU case - {each.pcCase}</p>
                        <p>Ram - {each.ram}</p>
                        <p>Cooling System - {each.coolingSystem}</p>
                        <p>Thermal Compound - {each.thermalCompund}</p>
                        <p>SSD - {each.SSD}</p>
                        <p>Operating System - {each.operatingSystem}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn rounded-0 "
                      onClick={() => {
                        this.switchPage("details");
                      }}
                    >
                      View more
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

export default PcList;
