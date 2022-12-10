import { Link } from 'react-router-dom'

function Header() {
  return (  
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Daniel Williams</a>
        <button className="navbar-toggler toggleButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className='nav-link active text-muted' href='/'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href='projects'>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="contact">Contact</a>
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