import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BrandList from "./brandList";
import BrandDetail from "./brandDetail";
import { NavLink } from "react-router-dom";

import {Helmet} from "react-helmet";

const items = require("./data/brands.json");
const details = require("./data/items.json");

// const Home = () => (
//   <div>
//   <Helmet>
//     <meta charSet="utf-8" />
//     <title>Home</title>
//    </Helmet>
//     <h2>BrandDetail</h2>
//     <BrandList/>
//   </div>
// )

ReactDOM.render(
   
  
  <BrowserRouter>
    <Switch>
      {items.map(item => (
        <Route
          path={`/detail/${item.slug}`}
          component={props => <BrandDetail brand={item} />}
        />
      ))}
      <Route exact path="/" component={BrandList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
