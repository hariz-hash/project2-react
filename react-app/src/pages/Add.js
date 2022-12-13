import React, { Component } from "react";
import axios from "axios";
export class Add extends Component {
  state = {
    data: [],
    gpu: [],
    cpu: [],
    motherBoard: [],
    cpuId: "",
    gpuId: "",
    motherBoardId: "",
    ram: "",
    coolingSystem: "",
    thermalCompound: "",
    ssd: "",
    os: "",
    email: "",
    showRamError: false,
    showCoolingSystemError: false,
    showThermalCompoundError: false,
    showSSDError: false,
    showOSError: false,
    showEmailError: false,
    showPcCaseError: false,
  };
  BASE_API_URL = "https://api2-project.onrender.com/";

  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "pc");
    console.log(response.data);
    this.setState({
      data: response.data,
    });
    // const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
    // this.setState({
    //   data: response.data,
    // });
    const responseCpu = await axios.get(this.BASE_API_URL + "cpu");
    console.log(responseCpu.data);
    this.setState({
      cpu: responseCpu.data,
    });
    const responseGpu = await axios.get(this.BASE_API_URL + "gpu");
    this.setState({
      gpu: responseGpu.data,
    });
    const responseMotherBoard = await axios.get(
      this.BASE_API_URL + "motherBoard"
    );
    this.setState({
      motherBoard: responseMotherBoard.data,
    });
  }

  addNew = async () => {
    const response = await axios.post(this.BASE_API_URL + "pc", {
      pcCase: this.state.pcCase,
      ram: this.state.ram,
      coolingSystem: this.state.coolingSystem,
      thermalCompund: this.state.thermalCompound,
      SSD: this.state.ssd,
      operatingSystem: this.state.os,
      cpuDetailsIdedit: this.state.cpuId,
      gpuDetailsIdedit: this.state.gpuId,
      motherBoardId: this.state.motherBoardId,
      email: this.state.email,
    });
    console.log(response);

    this.props.switchPage("list");
  };
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{ background: "#332a34", color: "green" }}
        >
          <div className="row">
            <div className="col-sm">
              <div className="m-2">
                <label className="m-2">PC Case:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.pcCase}
                  onChange={this.updateFormField}
                  name="pcCase"
                />
              </div>

              <div className="m-2">
                <label className="m-2">Ram:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.ram}
                  onChange={this.updateFormField}
                  name="ram"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Email:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.email}
                  onChange={this.updateFormField}
                  name="email"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Operating System:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.os}
                  onChange={this.updateFormField}
                  name="os"
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="m-2">
                <label className="m-2">Cooling System:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.coolingSystem}
                  onChange={this.updateFormField}
                  name="coolingSystem"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Thermal Compound:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.thermalCompound}
                  onChange={this.updateFormField}
                  name="thermalCompound"
                />
              </div>
              <div className="m-2">
                <label className="m-2">SSD:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.ssd}
                  onChange={this.updateFormField}
                  name="ssd"
                />
              </div>
              <br />
            </div>
            <div className="container mt-4 ">
              <select
                className="form-select m-2 p-2"
                name="gpuId"
                value={this.state.gpuId}
                onChange={this.updateFormField}
              >
                <option selected>Select a Gpu</option>

                {this.state.gpu.map((each) => {
                  return <option value={each._id}>{each.model}</option>;
                })}
              </select>
              <select
                className="form-select m-2 p-2"
                aria-label="Default select example"
                name="motherBoardId"
                value={this.state.motherBoardId}
                onChange={this.updateFormField}
              >
                <option selected>Select a Mother Board</option>

                {this.state.motherBoard.map((each) => {
                  return <option value={each._id}>{each.model}</option>;
                })}
              </select>
              <select
                className="form-select m-2 p-2"
                aria-label="Default select example"
                name="cpuId"
                value={this.state.cpuId}
                onChange={this.updateFormField}
              >
                <option selected>Select a Cpu</option>

                {this.state.cpu.map((each) => {
                  // console.log(each._id);
                  return <option value={each._id}>{each.model}</option>;
                })}
              </select>
            </div>
          </div>

          {/*
      

        
          <br />
          
          <br />
        */}
          <div className="mt-3">
            <button className="mt-2 btn btn-primary" onClick={this.addNew}>
              Add New
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
