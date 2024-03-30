import React, { Component } from 'react';
import '../css/Menu.css';
import { Routes,Route,Link,NavLink } from "react-router-dom";


export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='item-left-header'>
          <a className='font-for-navbar' href='$'>Fighters</a>
        </div>
        <div className='item-box-top'>
          <div className='items'>
            <a href='https://example.com/home'><i className="bi bi-house" style={{ fontSize: '1.9em', color: 'blue' }}></i>Home</a>
          </div>
          <div className='items'>
            <a href='https://example.com/profile'><i className="bi bi-person-circle" style={{ fontSize: '1.9em', color: 'blue' }}></i>Profile</a>
          </div>
          <div className='items'>
            <a href='https://example.com/search'><i className="bi bi-search" style={{ fontSize: '1.9em', color: 'blue' }}></i>Search</a>
          </div>
          <div className='items'>
            <a href='https://example.com/notifications'><i className="bi bi-bell" style={{ fontSize: '1.9em', color: 'blue' }}></i>Notifications</a>
          </div>
          <div className='items'>
            <a href='https://example.com/history'><i className="bi bi-stopwatch" style={{ fontSize: '1.9em', color: 'blue' }}></i>History</a>
          </div>
          <div className='items'>
            <a href='#'>Placeholder Item</a>
          </div>
        </div>
        <div className='support-bottom'>
          <a href='$'><i className="bi bi-headset" style={{ fontSize: '1em', color: 'blue' }}></i>SUPPORT</a>
        </div>
      </div>
    );
  }
}
