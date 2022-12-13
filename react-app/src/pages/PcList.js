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

  BASE_API_URL = "https://hz.onrender.com/";

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
                          <p>
                            <Icon.Cpu color="green" size="29px" />
                            {each.cpuDetailsId[0].model}
                          </p>
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
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Icon.Search /> Search
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Search Model
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <input className="form-control" type="text" name="search" />
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">CPU model</label>
                  <br />
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">GPU model</label>
                  <br />
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">MotherBoard model</label>
                  <br />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Search
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
                      <div className="description mt-4">
                        {/* <React.Fragment>{each._id}</React.Fragment> */}
                        <p>
                          <Icon.Cpu color="#70bb0d" size="29px" /> &nbsp;
                          {each.cpuDetailsId[0].model}
                        </p>
                        <p>
                          {" "}
                          <Icon.GpuCard color="#70bb0d" size="29px" /> &nbsp;
                          {each.gpuDetailsId[0].model}
                        </p>
                        <p>
                          <Icon.Motherboard color="#70bb0d" size="29px" />{" "}
                          &nbsp; MotherBoard details -
                          {each.motherBoardDetailsId[0].formFactor} ,
                          {each.motherBoardDetailsId[0].chipsetType} ,
                          {each.motherBoardDetailsId[0].model}
                        </p>
                        {/* <p>Ram - {each.ram}</p>
                        <p>SSD - {each.SSD}</p>
                        <p>CPU case - {each.pcCase}</p>
                        <p>Cooling System - {each.coolingSystem}</p>
                        <p>Thermal Compound - {each.thermalCompund}</p>
                        <p>Operating System - {each.operatingSystem}</p> */}
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
