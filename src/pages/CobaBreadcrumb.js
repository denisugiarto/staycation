import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";

import Header from "parts/Header";
export default class CobaBreadcrumb extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Home Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <div className="col-auto">
              <Breadcrumb data={breadcrumb} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
