import React, { Component } from "react";
import axios from "axios";
export class Edit extends Component {
  state = {
    pcId: null,
    // page: "dashBoard",
    data: [],
    pcById: [],
  };
  BASE_API_URL = "http://localhost:3008/";

  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "pc");
    // response.data[0].SSD);
    console.log();

    this.setState({
      data: response.data,
    });
  }

  Update = async (id) => {
    const responseSinglePc = await axios.put(
      this.BASE_API_URL + "pc/" + this.props.name
    );
    this.setState({
      pcById: responseSinglePc.data,
    });
    console.log(responseSinglePc.data._id);
    console.log(this.state.pcId);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container p-3"
          style={{ background: "#332a34", color: "green" }}
        >
          <div className="m-2">
            <label className="m-2">PC Case:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.pcCase}
              //   onChange={this.updateFormField}
              name="pcCase"
            />{" "}
            const id = {this.props.name};
          </div>
          <div className="m-2">
            <label className="m-2">Ram:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.ram}
              //   onChange={this.updateFormField}
              name="ram"
            />
          </div>
          <div className="m-2">
            <label className="m-2">Cooling System:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.coolingSystem}
              //   onChange={this.updateFormField}
              name="coolingSystem"
            />
          </div>
          <div className="m-2">
            <label className="m-2">Thermal Compound:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.thermalCompound}
              //   onChange={this.updateFormField}
              name="thermalCompound"
            />
          </div>
          <div className="m-2">
            <label className="m-2">SSD:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.ssd}
              //   onChange={this.updateFormField}
              name="ssd"
            />
          </div>
          <div className="m-2">
            <label className="m-2">Operating System:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.os}
              //   onChange={this.updateFormField}
              name="os"
            />
          </div>
          <div className="m-2">
            <label className="m-2">Email:</label>
            <input
              className="form-control"
              type="text"
              //   value={this.state.email}
              //   onChange={this.updateFormField}
              name="email"
            />
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
