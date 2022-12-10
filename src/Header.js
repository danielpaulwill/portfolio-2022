import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Daniel Williams</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className='nav-link' aria-current='page' href='/'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='projects'>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;