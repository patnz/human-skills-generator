import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
      <Link className="nav-logo-container" to="/">
        <img
          className="nav-logo"
          src="./images/horizontal_dark-text-1536x436.png"
          alt="Dev Academy logo"
        />
      </Link>
      <div className="nav-item-container">
        <Link className="nav-item" to="/whatsontop">
          WHATS ON TOP
        </Link>
        <Link className="nav-item" to="/fridayproject">
          FRIDAY PROJECT GENERATOR
        </Link>
        <Link className="nav-item" to="/clap">
          CLAP IDEAS
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
