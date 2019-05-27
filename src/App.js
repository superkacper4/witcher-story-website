import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css'
import StoryPage from './components/views/StoryPage/StoryPage';
import ContactPage from './components/views/ContactPage/ContactPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Nav />
            {/* <StoryPage/> */}
          <Switch>
            <Route exact path="/" component={StoryPage} />
            <Route path="/ContactPage" component={ContactPage} />
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
