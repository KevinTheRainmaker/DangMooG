import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPageComponent from "./upload/index.js";
import ProductPageComponent from "./product/index.js";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>

        <Route exact={true} path={"/upload"}>
          <UploadPageComponent />
        </Route>

        <Route exact={true} path={"/product"}>
          <ProductPageComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
