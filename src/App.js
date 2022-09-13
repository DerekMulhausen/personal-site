import './styles/styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scripts/populateSkills';
import Header from './siteComponents/header';
import popSkills from './scripts/populateSkills';


function App() {
  //var exp = JSON.parse(fetch('../data/experience.json'));
  //var skills = JSON.parse(fetch('../data/skills.json'));
//  popSkills(); 
  return (
    <>

      <Header />
    </>
  );
}

export default App;
