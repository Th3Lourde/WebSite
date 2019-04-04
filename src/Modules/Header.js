// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'
import Lifting from './Lifting';


class Header extends Component {
  render() {
    return(

      <div className="Menu">
        <Router>
          <div className="Home">
            <h1 className="Black-text"><Link to="/about"><span className="Black-text">Eli Sylvia-Lourde</span></Link></h1>
          </div>
          <div className="Sub-Menu">
            <h1 className="Black-text"><Link to="/lifting"><span className="Black-text">Lifting</span></Link></h1>
          </div>
          <div className="Sub-Menu hidden">
            <h1 className="Black-text"><Link to="/"><span className="Black-text">Fractals</span></Link></h1>
          </div>
          <div className="Sub-Menu hidden">
            <h1 className="Black-text"><Link to="/"><span className="Black-text">Cyber Security</span></Link></h1>
          </div>
          <div className="Sub-Menu hidden">
            {/*<h1 className="Black-text"><Link to="/"><span className="white-text">Softw</span><span className="Black-text">are</span></Link></h1>*/}
            <h1 className="Black-text"><Link to="/"><span className="white-text">Softw<span className="Black-text">are</span></span></Link></h1>
          </div>
          <div className="Sub-Menu hidden">
            <h1 className="Black-text"><span className="white-text">Math</span></h1>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/lifting" component={Lifting} />

        </Router>
      </div>

    )

    const Home = () => (
      <div>
        <h2 className="black">Home</h2>
      </div>
    );

    const About = () => (
      <div>
        <h2>About</h2>
      </div>
    );

  }



}

export default Header
