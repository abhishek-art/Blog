import React from 'react';
import './App.css';
import Home from './Containers/Home/index';
import Contact from './Containers/Contact Us/index'
import Post from './Containers/Post/Post';
import About from './Containers/About Us/About';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/post/:postId" exact component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
