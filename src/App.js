import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
function App() {

  return (
    
    <div className="app">
     <Router>
       <Navbar />
       <Switch>
          <Route exact path="/movie-app/" component={Home}></Route>
          <Route exact path="/movie-app/search" component={Movies}></Route>
          <Route path="/movie-app/search/:id" component={SingleMovie}></Route>
       </Switch>
     </Router>
    </div>
     
  );
}

export default App;
