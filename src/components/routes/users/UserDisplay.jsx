import { useSelector } from "react-redux"

const UserDisplay = () => {
  const user = useSelector(state => state.user.user)

  return (
    <>
    <div className="m-3 rounded border border-info p-3">
      <div className="d-flex align-items center">
        <h5>{user.name}</h5>
      </div>
      <hr />
      <ul>
        <li><b>Taille: </b>{user.taille}</li>
        <li><b>Poids: </b>{user.poids}</li>
        <li><b>Date: </b>{user.date}</li>
      </ul>
    </div>
    </>
  )
}

export default UserDisplay