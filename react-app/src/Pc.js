import React from "react";
import AddPc from "./pages/AddPc";
import PcList from "./pages/PcList";
export class Pc extends React.Component {
  state = {
    page: "list",
  };

  renderPage = () => {
    if (this.state.page === "list") {
      return <PcList />;
    } else if (this.state.page === "addpc") {
      return <AddPc />;
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
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}

export default Pc;
