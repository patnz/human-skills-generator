import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
      <Link id="nav-logo" className="nav-logo-container" to="/">
        <img
          className="nav-logo"
          src="./images/horizontal_dark-text-1536x436.png"
          alt="Dev Academy logo"
        />
      </Link>
      <div className="nav-item-container">
        <Link id="nav1" className="nav-item" to="/whatsontop">
          <div className="nav-text">WHATS</div>
          <div className="nav-text">ON</div>
          <div className="nav-text">TOP</div>
        </Link>
        <Link id="nav2" className="nav-item" to="/fridayproject">
          <div className="nav-text">FRIDAY</div>
          <div className="nav-text">PROJECT</div>
          <div className="nav-text">GENERATOR</div>
        </Link>
        <Link id="nav3" className="nav-item" to="/clap">
          <div className="nav-text">LAST</div>
          <div className="nav-text">MINUTE</div>
          <div className="nav-text">CLAPS</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav

// <!-- FOOTER -->
// <div className='footer'>
//   <img className='footer-logo' src='./images/dev-logo.png' alt='dev-logo'>
//   <p className='footer-text'>MAKING HUMAN SKILLS EASIER AT DEV-ACADEMY</p>
