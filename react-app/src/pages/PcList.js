import React, { Component } from "react";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import "./PcList.css";

export class PcList extends Component {
  state = {
    data: [],
    viewMore: false,
    pass: "",
    passId: [],
  };

  BASE_API_URL = "http://localhost:3008/";

  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "pc");
    console.log(response.data);

    this.setState({
      data: response.data,
    });
  }
  viewMore = async (id) => {
    const responseSinglePc = await axios.get(
      // this.BASE_API_URL + "pc/638ae6f4bce20d5272bfc750"
      this.BASE_API_URL + "pc/" + id //+ this.state.pass //
    );
    this.setState({
      passId: responseSinglePc.data,
      viewMore: true,
    });
  };
  render() {
    if (this.state.viewMore) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              {this.state.passId.map((each) => {
                return (
                  <div className="col-lg-6" key={each._id}>
                    <div className="card  border-0 mt-3">
                      <div className="card-body">
                        <h3 className="card-title">{each.pcCase}</h3>
                        <div className="description">
                          <React.Fragment>let x = {each._id}</React.Fragment>
                          <p>CPU model - {each.cpuDetailsId[0].model}</p>
                          <p>GPU model - {each.gpuDetailsId[0].model}</p>
                          <p>
                            MotherBoard details -
                            {each.motherBoardDetailsId[0].formFactor} ,
                            {each.motherBoardDetailsId[0].chipsetType} ,
                            {each.motherBoardDetailsId[0].model}
                          </p>
                          <p>Ram - {each.ram}</p>
                          <p>SSD - {each.SSD}</p>
                          <p>CPU case - {each.pcCase}</p>
                          <p>Cooling System - {each.coolingSystem}</p>
                          <p>Thermal Compound - {each.thermalCompund}</p>
                          <p>Operating System - {each.operatingSystem}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn rounded-0 "
                        onClick={this.viewMore}
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
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.map((each) => {
              return (
                <div className="col-lg-6 " key={each._id}>
                  <div className="card  border-0 mt-3">
                    <div className="card-body">
                      <h3 className="card-title">{each.pcCase}</h3>
                      <div className="description">
                        {/* <React.Fragment>{each._id}</React.Fragment> */}
                        <p>CPU model {each.cpuDetailsId[0].model}</p>
                        <p>GPU model - {each.gpuDetailsId[0].model}</p>
                        <p>
                          MotherBoard details -
                          {each.motherBoardDetailsId[0].formFactor} ,
                          {each.motherBoardDetailsId[0].chipsetType} ,
                          {each.motherBoardDetailsId[0].model}
                        </p>
                        <p>Ram - {each.ram}</p>
                        <p>SSD - {each.SSD}</p>
                        <p>CPU case - {each.pcCase}</p>
                        <p>Cooling System - {each.coolingSystem}</p>
                        <p>Thermal Compound - {each.thermalCompund}</p>
                        <p>Operating System - {each.operatingSystem}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn rounded-0 "
                      onClick={() => this.viewMore(each._id)}
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

    // if (this.state.viewMore) {
    //   return (

    //   );
    // }
  }
}

export default PcList;
