import React from 'react'
import Navbar from './Navbar'
import './landing.css';
import { Link } from 'react-router-dom'
import { Wave } from 'react-animated-text';
import { auth } from '../firebase';
import firebase from 'firebase'

const Landing = ({history,setUser,user}) => {
  const logout = () => {
    firebase.auth().signOut();
    setUser(null);
    history.push("/login");
  }
  return (
    <div>
      <div class="landing-home">
        <div class="container">
          <div class="first-content">
            <h1>Mental Therapy Space</h1>
            <span><em>By</em> HealDevs</span>
            <a class="fa fa-angle-down page-scroll" href="#about"></a>
            <div className="button">
              {!user && <Link to='/login' className="Login">
                Start
            </Link>}
              {user &&  (<div className="Login" style={{cursor:"pointer"}} onClick={logout}>Logout</div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Part Start */}
      <div className="graph">
        <h2 className="graph-title">Let's Understand it through the data of Canada</h2>
        <div class="graph-card">
          <div className="flourish-embed flourish-chart card" data-src="visualisation/5875049"></div>
        </div>
      </div>

    </div>
  )
}

export default Landing
