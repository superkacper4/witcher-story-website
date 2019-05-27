import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import StoryPage from "./components/views/StoryPage/StoryPage";
import AnotherPage from "./components/views/AnotherPage/AnotherPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Nav />
          {/* <StoryPage/> */}
          <Switch>
            <Route exact path="/witcher-story-website" component={StoryPage} />
            <Route
              path="/witcher-story-website/AnotherPage"
              component={AnotherPage}
            />
          </Switch>
        </>
      </BrowserRouter>
      // <div>

      //   <Nav/>
      //   <TitlePage/>
      //   <FirstPage/>
      //   <SecondPage/>
      //   <ThirdPage/>
      //   <FourthPage/>

      // </div>
    );
  }
}

export default App;
