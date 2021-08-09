import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
// import CobaNumber from "pages/CobaNumber";
// import CobaDate from "pages/CobaDate";
// import CobaBreadcrumb from "pages/CobaBreadcrumb";
import NotFound from "pages/404";

import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"
import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/properties/:id" component={DetailsPage}></Route>
          {/* <Route path="/browse-by" component={CobaDate}></Route>
          <Route path="/stories" component={CobaNumber}></Route>
          <Route path="/agents" component={CobaBreadcrumb}></Route> */}
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/*" component={NotFound}></Route>
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
