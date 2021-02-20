import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <div>
        <Header />

        <Switch>

          <Route exact path={["/", "/about"]}>
            <About />
          </Route>

          <Route exact path={"/projects"}>
            <Projects />
          </Route>

          <Route exact path={"/resume"}>
            <Resume />
          </Route>

          <Route exact path={"/contact"}>
            <Contact />
          </Route>

        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
