import React, { Component } from "react";
import axios from "axios";
export class Edit extends Component {
  state = {
    //   // page: "dashBoard",

    updatePcCase: "",
    updateRam: "",
    updateCoolingSystem: "",
    updateThermalCompund: "",
    updateSSD: "",
    updateOperatingSystem: "",
    getPc: [],
    cpu: [],
    gpu: [],
    motherBoard: [],
    cpuId: "",
    gpuId: "",
    motherBoardId: "",
  };
  BASE_API_URL = "https://hz.onrender.com/";

  async componentDidMount() {
    let pcId = this.props.id;

    const responsePcId = await axios.get(this.BASE_API_URL + "pc/" + pcId);
    const responseCpu = await axios.get(this.BASE_API_URL + "cpu");
    const responseGpu = await axios.get(this.BASE_API_URL + "gpu");
    const responseMotherBoard = await axios.get(
      this.BASE_API_URL + "motherBoard"
    );
    this.setState({
      getPc: responsePcId.data,
      cpu: responseCpu.data,
      gpu: responseGpu.data,
      motherBoard: responseMotherBoard.data,
    });

    let pcCase = responsePcId.data[0].pcCase;
    let ram = responsePcId.data[0].ram;
    let coolingSystem = responsePcId.data[0].coolingSystem;
    let thermalCompund = responsePcId.data[0].thermalCompund;
    let SSD = responsePcId.data[0].SSD;
    let operatingSystem = responsePcId.data[0].operatingSystem;

    this.setState({
      updatePcCase: pcCase,
      updateRam: ram,
      updateCoolingSystem: coolingSystem,
      updateThermalCompund: thermalCompund,
      updateSSD: SSD,
      updateOperatingSystem: operatingSystem,
    });
    console.log(this.state.updateRam);
  }

  Update = async () => {
    let pcId = this.props.id;

    const responseSinglePc = await axios.put(
      this.BASE_API_URL + "edit/" + pcId,
      {
        pcCase: this.state.updatePcCase,
        ram: this.state.updateRam,
        coolingSystem: this.state.updateCoolingSystem,
        thermalCompund: this.state.updateThermalCompund,
        SSD: this.state.updateSSD,
        operatingSystem: this.state.updateOperatingSystem,
        cpuDetailsId: this.state.cpuId,
        gpuDetailsId: this.state.gpuId,
        motherBoardDetailsId: this.state.motherBoardId,
      }
    );

    console.log(responseSinglePc.data._id);
    console.log(this.state.pcId);
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
          className="container p-3"
          style={{ background: "#332a34", color: "green" }}
        >
          <div className="row">
            <div className="col-sm">
              {" "}
              <div className="m-2">
                <label className="m-2">PC Case:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updatePcCase}
                  onChange={this.updateFormField}
                  name="updatePcCase"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Ram:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updateRam}
                  onChange={this.updateFormField}
                  name="updateRam"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Operating System:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updateOperatingSystem}
                  onChange={this.updateFormField}
                  name="updateOperatingSystem"
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="m-2">
                <label className="m-2">Cooling System:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updateCoolingSystem}
                  onChange={this.updateFormField}
                  name="updateCoolingSystem"
                />
              </div>
              <div className="m-2">
                <label className="m-2">Thermal Compound:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updateThermalCompund}
                  onChange={this.updateFormField}
                  name="updateThermalCompund"
                />
              </div>
              <div className="m-2">
                <label className="m-2">SSD:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.updateSSD}
                  onChange={this.updateFormField}
                  name="updateSSD"
                />
              </div>
            </div>
          </div>
          <div className="container mt-4 ">
            <select
              class="form-select"
              aria-label="Default select example"
              name="cpuId"
              value={this.state.cpuId}
              onChange={this.updateFormField}
            >
              <option>Select a Cpu</option>

              {this.state.cpu.map((each) => {
                // console.log(each._id);
                return <option value={each._id}>{each.model}</option>;
              })}
            </select>
            <br />
            <select
              class="form-select"
              aria-label="Default select example"
              name="gpuId"
              value={this.state.gpuId}
              onChange={this.updateFormField}
            >
              <option selected>Select a Gpu</option>

              {this.state.gpu.map((each) => {
                return <option value={each._id}>{each.model}</option>;
              })}
            </select>
            <br />
            <select
              class="form-select"
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
          </div>

          <div className="mt-3">
            <button className="mt-2 btn btn-primary" onClick={this.Update}>
              Update
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
