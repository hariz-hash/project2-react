import React, { Component } from "react";

export class Edit extends Component {
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
            />
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
            <button className="mt-2 btn btn-primary" onClick={this.addNew}>
              Update
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
