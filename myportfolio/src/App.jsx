import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Home from './pages/home/home.jsx';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume.jsx';
import Experience from './pages/experience/experience.jsx`~`';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/experience" component={Experience} />
      </div>
    </Router>
  );
};

export default App;
