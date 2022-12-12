import React, { Component } from "react";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import "./PcList.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
  goBack = async () => {
    this.props.switchPage("list");
    this.setState({
      viewMore: false,
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
                        onClick={() => this.goBack()}
                      >
                        Back{" "}
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
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
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
