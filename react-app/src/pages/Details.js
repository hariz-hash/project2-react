import React, { Component } from "react";
import axios from "axios";
export class DashBoard extends Component {
  state = {
    data: [],
  };
  BASE_API_URL = "http://localhost:3008/";
  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
    this.setState({
      data: response.data,
    });
  }

  deleteCar = async (selectPcId) => {
    // console.log(c._id);
    let pcId = selectPcId._id;

    let response = await axios.delete(this.BASE_API_URL + "pc/" + pcId);

    console.log(response);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container rounded-1">
          <table
            className="table"
            style={{ background: "#332a34", color: "green" }}
          >
            <thead>
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
}

export default DashBoard;
