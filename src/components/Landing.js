import React from 'react'
import Navbar from './Navbar'
import './landing.css';
import { Link } from 'react-router-dom'
import { Wave } from 'react-animated-text';

const Landing = () => {
  return (
    <div>
      <div class="landing-home">
        <div class="container">
          <div class="first-content">
            <h1>Mental Therapy Space</h1>
            <span><em>By</em> HealDevs</span>
            <a class="fa fa-angle-down page-scroll" href="#about"></a>
            <div className="button">
              <Link to='/login' className="Login">
                Start
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
