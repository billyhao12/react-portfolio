import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="wrapperDiv">
        <Header className="header" />

        <Switch>

          <Route exact path={["/", "/about"]}>
            <About className="content" />
          </Route>

          <Route exact path={"/projects"}>
            <Projects className="content" />
          </Route>

          <Route exact path={"/resume"}>
            <Resume />
          </Route>

          <Route exact path={"/contact"}>
            <Contact className="content" />
          </Route>

        </Switch>
        
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
