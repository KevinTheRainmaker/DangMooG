import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPageComponent from "./upload/index.js";
import ProductPageComponent from "./product/index.js";

import { Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />
          </Route>

          <Route exact={true} path={"/upload"}>
            <UploadPageComponent />
          </Route>

          <Route exact={true} path={"/products/:id"}>
            <ProductPageComponent />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
