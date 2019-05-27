import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import StoryPage from "./components/views/StoryPage/StoryPage";
import AnotherPage from "./components/views/AnotherPage/AnotherPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={StoryPage} />
            <Route path="/AnotherPage" component={AnotherPage} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
