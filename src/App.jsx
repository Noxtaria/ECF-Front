import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { signOut } from "./components/routes/auth/authSlice";

function App() {
  const user = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}>
              <i className="bi bi-globe"></i> WhatIsMyIMC
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#IMC-navbar"
              aria-controls="IMC-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="WhatIsMyIMC">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  {user && (
                    <Link
                      to={`/users/add`}
                      className="nav-link"
                    >
                    Add User
                    </Link>
                  )}
                </li>
              </ul>
              {user ? (
                <button
                  className="ms-auto btn btn-secondary"
                  onClick={() => dispatch(signOut())}
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link
                    className="ms-auto btn btn-outline-info"
                    to={`/auth?mode=Sign+Up`}
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="ms-2 btn btn-primary"
                    to={`/auth?mode=Sign+In`}
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 bg-dark rounded p-3 text-light">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
