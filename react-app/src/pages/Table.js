import React, { Component } from "react";
import axios from "axios";
import Edit from "./Edit";
export class Table extends Component {
  BASE_API_URL = "http://localhost:3008/";
  state = {
    search: "",
    searchPressed: false,
    viewChanges: false,
    pcId: null,
    // editPage: false,
    singlepage: false,
    page: "showTable",
    data: [],
    editPress: false,
  };
  delete = async (id) => {
    // const response = await axios.get(this.BASE_API_URL + "user/harp@gmail.com");
    let response = await axios.delete(this.BASE_API_URL + "pc/" + id);
    this.props.switchPage("DashBoard");
    this.setState({
      searchPressed: true,
    }); // console.log(response);
    console.log(response);
  };

  edit = async (pcId, newPage) => {
    const response = await axios.get(this.BASE_API_URL + "pc/" + pcId);
    this.setState({
      data: response.data,
      page: newPage,
      pcId: pcId,
    });

    // this.props.switchPage("showEdit");
  };

  renderPage = () => {
    if (this.state.page === "showEdit") {
      //   console.log("test");
      return <Edit name={[this.state.pcId]} />;
    }
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
              {this.props.name.map((each) => {
                return (
                  <tr key={each._id}>
                    <th scope="row">1</th>
                    <td>
                      <p>CPU case - {each.pcCase}</p>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.email}
                        onChange={this.updateFormField}
                        name="email"
                      />
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
                        onClick={() => {
                          this.edit(each._id, "showEdit");
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn rounded-0 "
                        onClick={() => this.delete(each._id)}
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
        {this.renderPage()}
        <div>adadada</div>
      </React.Fragment>
    );
  }
}

export default Table;
