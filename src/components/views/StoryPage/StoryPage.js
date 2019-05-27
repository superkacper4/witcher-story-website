import React from "react";
// import React, { Component } from 'react';
import TitlePage from "../TitlePage/TitlePage";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import Footer from "../../Footer/Footer";
import StoryNav from "../../StoryNav/StoryNav";

const StoryPage = () => (
  <>
    <StoryNav />
    <TitlePage />
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <Footer />
  </>
);

export default StoryPage;
