import React, { Component } from 'react';
import '../css/Header.css';
import { MYOBLogo } from '@myob/myob-widgets'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo">
          <div style={{ width: '150px' }}>
            <MYOBLogo type='white'/>
          </div>
        </div>
        <h2 className='Label'>Services Dashboard</h2>
      </header>
    )
  }
}

export default Header;