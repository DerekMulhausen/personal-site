import './styles/styles.css';
import React from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Header from './siteComponents/header';
import About from './siteComponents/about';



function App() {
  //var exp = JSON.parse(fetch('../data/experience.json'));
  //var skills = JSON.parse(fetch('../data/skills.json'));
//  popSkills(); 
  return (
    <>

      <About />
    </>
  );
}

export default App;
