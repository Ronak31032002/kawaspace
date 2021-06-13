import React from "react";
import './css/app.css';

class Header extends React.Component{
    render() {
        
    return (
        <>
        <div className = 'header'>
          <div className = 'text'>
            <h2>YourChallange</h2>
          </div>
          <div className = 'list'>
              <ul>
                  <li className = 'active'>
                  <a href = ''>
                  Product
                  </a>
                  </li>
                  <li>
                  Download
                  </li>
                  <li>
                  Pricing
                  </li>
              </ul>
          </div>
        </div>
        </>
    );
    }
}

export default Header;