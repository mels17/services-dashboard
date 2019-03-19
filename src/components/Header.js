import React, { Component } from 'react';
import {MYOBLogo} from "@myob/myob-widgets"
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo">
          <div style={{ width: '150px' }}>
            <MYOBLogo type='white'/>
          </div>
        </div>
        <h2>Services Dashboard</h2>
      </header>
    )
  }
}

export default Header;