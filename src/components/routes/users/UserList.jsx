import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import UserDisplay from "./UserDisplay"

const UserList = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>User List</h3>
        {user && <Link to={`/users/add`} className="btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {user.length === 0 ?
      <p>There is no user in the database!</p> : 
      [...user].sort((a, b) => a.id.localeCompare(b.id)).map(p => <UserDisplay key={p.id} />)}
    </>
  )
}


export default UserList