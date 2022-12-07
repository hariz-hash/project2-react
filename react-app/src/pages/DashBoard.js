import React, { Component } from "react";
import axios from "axios";
import Add from "./Add.js";
import Details from "../Details";
// import Details from "./Details.JS";
export default class DashBoard extends Component {
  state = {
    search: "",
    searchPressed: false,
  };
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  BASE_API_URL = "http://localhost:3008/";
  // async componentDidMount() {
  //   const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
  //   this.setState({
  //     data: response.data,
  //   });
  // }
  search = async () => {
    const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
    this.setState({
      data: response.data,
      searchPressed: true,
    }); // console.log(response);

    // this.props.switchPage("DashBoard");
  };
  render() {
    // if (this.state.isLoggedIn) {
    //   return <Details />;
    // }
    // return <Add />;

    // return <React.Fragment>add</React.Fragment>;
    if (this.state.searchPressed) {
      return (
        <React.Fragment>
          <div className="container rounded-1">
            <table
              className="table"
              style={{ background: "#332a34", color: "green" }}
            >
              <thead>
                aAFAFAFAFAFAWF
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PC SPECS</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((each) => {
                  return (
                    <tr key={each._id}>
                      <th scope="row">1</th>
                      <td>
                        <p>CPU case - {each.pcCase}</p>
                        <p>CPU model - {each.cpuDetailsId[0].model}</p>
                        <p>Ram - {each.ram}</p>
                        <p>Cooling System - {each.coolingSystem}</p>
                        <p>Thermal Compound - {each.thermalCompund}</p>
                        <p>SSD - {each.SSD}</p>
                        <p>Operating System - {each.operatingSystem}</p>
                        <p>GPU model - {each.gpuDetailsId[0].model}</p>
                        <p>Operating System - {each.operatingSystem}</p>
                        <p>
                          MotherBoard details -
                          {each.motherBoardDetailsId[0].formFactor} ,
                          {each.motherBoardDetailsId[0].chipsetType} ,
                          {each.motherBoardDetailsId[0].model}
                        </p>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn rounded-0 "
                          onClick={() => {}}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn rounded-0 "
                          onClick={() => {}}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="container rounded-1">
          <div className="m-2">
            <label className="m-2">Search</label>
            <input
              className="form-control"
              type="text"
              value={this.state.search}
              onChange={this.updateFormField}
              name="search"
            />
          </div>
          <div className="mt-3">
            <button className="mt-2 btn btn-primary" onClick={this.search}>
              Search
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
/* <div className="container rounded-1">
          <table
            className="table"
            style={{ background: "#332a34", color: "green" }}
          >
            <thead>
              aAFAFAFAFAFAWF
              <tr>
                <th scope="col">#</th>
                <th scope="col">PC SPECS</th>
                <th scope="col">Option</th>
                <th scope="col">
                  <button
                    type="button"
                    className="btn rounded-0 "
                    onClick={this.addNew}
                  >
                    Add
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((each) => {
                return (
                  <tr key={each._id}>
                    <th scope="row">1</th>
                    <td>
                      <p>CPU case - {each.pcCase}</p>
                      <p>CPU model - {each.cpuDetailsId[0].model}</p>
                      <p>Ram - {each.ram}</p>
                      <p>Cooling System - {each.coolingSystem}</p>
                      <p>Thermal Compound - {each.thermalCompund}</p>
                      <p>SSD - {each.SSD}</p>
                      <p>Operating System - {each.operatingSystem}</p>
                      <p>GPU model - {each.gpuDetailsId[0].model}</p>
                      <p>Operating System - {each.operatingSystem}</p>
                      <p>
                        MotherBoard details -
                        {each.motherBoardDetailsId[0].formFactor} ,
                        {each.motherBoardDetailsId[0].chipsetType} ,
                        {each.motherBoardDetailsId[0].model}
                      </p>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn rounded-0 "
                        onClick={() => {}}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn rounded-0 "
                        onClick={() => {}}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */
