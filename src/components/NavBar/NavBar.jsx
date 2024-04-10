import { Link } from 'react-router-dom';
import routes from '../../routes/routes';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext'

const NavBar = () => {
  
   const {user, signOut} = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-color-nav">
      <div className="container-fluid">
        <Link className='navbar-brand font-nav logo-nav' to={routes.home}>Nostalgic Gamer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='navbar-brand font-nav logo-nav' to={routes.home}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className='navbar-brand font-nav logo-nav' to={routes.link}>Link</Link>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className='navbar-brand font-nav logo-nav' to={routes.login}>Accedi</Link>
                </li>
                <li className="nav-item">
                  <Link className='navbar-brand font-nav logo-nav' to={routes.signin}>Registrati</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className='navbar-brand font-nav logo-nav' onClick={() => singOut()}>Logout</Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Cerca</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
