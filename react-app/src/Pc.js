import React from "react";
import AddPc from "./pages/Add";
import PcList from "./pages/PcList";
import "./Pc.css";
import DashBoard from "./pages/DashBoard";
import Add from "./pages/Add.js";
import Edit from "./pages/Edit.js";
import Home from "./pages/Home.js";

export class Pc extends React.Component {
  state = {
    page: "list",
  };

  renderPage = () => {
    if (this.state.page === "list") {
      return <PcList switchPage={this.switchPage} />;
    } else if (this.state.page === "addpc") {
      return <Add switchPage={this.switchPage} />;
    } else if (this.state.page === "DashBoard") {
      return <DashBoard switchPage={this.switchPage} />;
    } else if (this.state.page === "Edit") {
      return <Edit />;
    } else if (this.state.page === "home") {
      return <Home />;
    }
  };
  switchPage = (newPage) => {
    this.setState({
      page: newPage,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item m-2">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => {
                    this.switchPage("home");
                  }}
                >
                  ASSEMBLE <span>X</span>
                </a>
              </li>
              <li className="nav-item m-2">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => {
                    this.switchPage("list");
                  }}
                >
                  PC
                </a>
              </li>
              <li className="nav-item m-2">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => {
                    this.switchPage("DashBoard");
                  }}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item m-2">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => {
                    this.switchPage("addpc");
                  }}
                >
                  Add Pc
                </a>
              </li>
              {/* <li className="nav-item m-2">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => {
                    this.switchPage("addpc");
                  }}
                >
                  Your Pc
                </a>
              </li> */}
              {/* <li className="nav-item me-2">
                <a className="nav-link" href="/#">
                  Link 3
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}

export default Pc;
