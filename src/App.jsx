import "./App.css";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Favourites } from "./Pages/Favourites/Favourites";
import { Home } from "./Pages/Home/Home";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  return (
    <HashRouter>
      <Header></Header>
      <main>
        <Switch>
          <Route excact path="/favourites" component={Favourites} />
          <Route excact path="/" component={Home} />
        </Switch>
      </main>
      <Footer></Footer>
    </HashRouter>
  );
}

