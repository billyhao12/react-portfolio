import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path={"/projects"}>
            <Project />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
