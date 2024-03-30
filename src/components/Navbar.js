import React, { Component } from 'react';
import '../css/topnavbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes ,Route ,NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-top'>
        <form>
        <a href='$' className='a-for-icon'>Fighter</a>

        </form>
        <div className='a-for-right'>
          
        <Link to="/addform " className="bi bi-plus-circle"></Link>
        </div>

      </div>
    )
  }
}
