import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Sorry Letter Collection</h1>
        <p>Choose a letter to read:</p>
        
        <div className="letter-links">
          <Link to="/letter/1" className="letter-link">
            Letter 1
          </Link>
          <Link to="/letter/2" className="letter-link">
            Letter 2
          </Link>
          <Link to="/letter/3" className="letter-link">
            Letter 3
          </Link>
          <Link to="/letter/4" className="letter-link">
            Letter 4
          </Link>
          <Link to="/letter/5" className="letter-link">
            Letter 5
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage