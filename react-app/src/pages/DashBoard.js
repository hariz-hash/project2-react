import React, { Component } from "react";
import axios from "axios";
import Add from "./Add.js";
import Details from "../Details";
import Edit from "./Edit.js";
import Table from "./Table.js";

// import Details from "./Details.JS";
export default class DashBoard extends Component {
  state = {
    search: "",
    searchPressed: false,
    viewChanges: false,
    pcId: null,
    editPage: false,
    singlepage: false,
    page: "",
    data: [],
  };
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  BASE_API_URL = "http://localhost:3008/";

  search = async (userMail, newPage) => {
    const response = await axios.get(this.BASE_API_URL + "user/" + userMail);
    this.setState({
      data: response.data,
      page: newPage,
    });
  };

  renderPage = () => {
    if (this.state.page === "showTable") {
      return <Table name={[...this.state.data]} switchPage={this.switchPage} />;
    }
  };

  render() {
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
            <button
              className="mt-2 btn btn-primary"
              onClick={() => this.search(this.state.search, "showTable")}
            >
              Search
            </button>
          </div>
        </div>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}
