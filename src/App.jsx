import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, signIn, signUp } from "./components/routes/auth/authSlice";
import SignForm from "./components/routes/auth/SignForm";
import Modal from "./components/routes/shared/Modal";


function App() {
  const user = useSelector(state => state.auth.user)
  const [signFormMode, setSignFormMode] = useState("")
  const dispatch = useDispatch()

  const onSigningHandler = async (credentials) => {
    if (signFormMode === "Sign In") {
      await dispatch(signIn(credentials))
    } else if (signFormMode === "Sign Up") {
      await dispatch(signUp(credentials))
    }

    setSignFormMode("")
  }
  return (
    <div className="App">
      {signFormMode && createPortal(<Modal onClose={() => setSignFormMode("")} title={signFormMode}>
        <SignForm mode={signFormMode} onSubmit={onSigningHandler} />
      </Modal>, document.getElementById("modal-root"))}
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> WhatIsMyIMC</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Accueil</NavLink>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="eRecipe-navbar">
            {user ? (
              <button className="ms-auto btn btn-secondary" onClick={() => dispatch(removeUser())}>Sign Out</button>
              ) : (
              <>
                <button className="ms-auto btn btn-outline-info" onClick={() => setSignFormMode("Sign Up")}>Register</button>
                <button className="ms-2 btn btn-primary" onClick={() => setSignFormMode("Sign In")}>Sign In</button>
              </>
            )}
          </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark text-light p-3 rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
