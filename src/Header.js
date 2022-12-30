import { NavLink } from 'react-router-dom'

function Header({ homeClick }) {

  return (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Daniel Williams</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="projects">Projects</NavLink>
\           <NavLink className='nav-link' to="blogs">Blogs</NavLink>
            <NavLink className='nav-link' to="contact">Contact</NavLink>
          </ul>
          <form className="d-flex" role="search">
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;