import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh", width: "100vw"}}>
      <h3>Error {error.status}!</h3>
      <p>{error.data}</p>

      <Link
                      to={`/`}
                      className="nav-link btn btn-info p-2 rounded"
                    >
                    Retour à l'accueil
                    </Link>
    </div>
  )
}

export default ErrorPage