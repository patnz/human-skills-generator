import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="navbar">
        <Link to="">
          <img
            className="nav-logo"
            src="./images/horizontal_dark-text-1536x436.png"
            alt="Dev Academy logo"
          />
        </Link>
      </div>
      <div className="navDiv">
        <div className="nav-listitem">
          <Link to="/whatsOnTopSnippet">WHATS ON TOP</Link>
        </div>

        <div className="nav-listitem">
          <Link to="">FRIDAY PROJECT GENERATOR</Link>
        </div>

        <div className="nav-listitem">
          <Link to="">CLAP IDEAS</Link>
        </div>
      </div>
      <div>
        <hr className="nav-line" />
      </div>
    </>
  )
}

export default Nav

// <!-- FOOTER -->
// <div className='footer'>
//   <img className='footer-logo' src='./images/dev-logo.png' alt='dev-logo'>
//   <p className='footer-text'>MAKING HUMAN SKILLS EASIER AT DEV-ACADEMY</p>
