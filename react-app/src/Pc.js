import React from "react";

export class Pc extends React.Component {
  state = {
    page: "list",
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  PC
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                  Add Pc
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
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
