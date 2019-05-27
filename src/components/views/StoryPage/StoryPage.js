import React from 'react';
// import React, { Component } from 'react';
import TitlePage from '../TitlePage/TitlePage';
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../FourthPage/FourthPage';
import Footer from '../../Footer/Footer';
import StoryNav from '../../StoryNav/StoryNav';
import AppContext from '../../../context'



class StoryPage extends React.Component{
  state = {
    itemClass1: true,
    itemClass2: false,
    itemClass3: false,
    itemClass4: false,
    itemClass5: false,
  }

  div1=React.createRef();
  div2=React.createRef();
  div3=React.createRef();
  div4=React.createRef();
  div5=React.createRef();

  render(){
    return(
      <AppContext.Provider value ={this.state}>
      <StoryNav
      div1={this.div1}
      div2={this.div2}
      div3={this.div3}
      div4={this.div4}
      div5={this.div5}
      />
      <TitlePage ref={this.div1}/>
      <FirstPage ref={this.div2}/>
      <SecondPage ref={this.div3}/>
      <ThirdPage ref={this.div4}/>
      <FourthPage ref={this.div5}/>
      <Footer/>

    </AppContext.Provider>
    )
  }
}

export default StoryPage;