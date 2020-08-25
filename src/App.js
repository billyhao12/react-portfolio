import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

// Pages
import About from './pages/About';

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
            <Project />
          </Route>

          <Route exact path={"/contact"}>
            {/* Contact Page */}
          </Route>

        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
