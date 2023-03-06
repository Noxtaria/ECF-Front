import { useRef } from "react"
import { useDispatch} from "react-redux"
import { addUser } from "./UserSlice"

const UserForm = () => {
  const dispatch = useDispatch()

  const nameRef = useRef()
  const tailleRef = useRef()
  const poidsRef = useRef()
  const dateRef = useRef()

  const submitFormHandler = async (e) => {
    e.preventDefault()

      const name = nameRef.current.value
      const taille = tailleRef.current.value
      const poids = poidsRef.current.value
      const date = dateRef.current.value

      nameRef.current.value = ""
      tailleRef.current.value = ""
      poidsRef.current.value = ""
      dateRef.current.value = ""

      const userValues = {
        name,
        taille,
        poids,
        date
      }

        await dispatch(addUser(userValues))


  }

  return (
    <>
      <h3>Add User</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" id="name" className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="taille" className="form-label">Taille: </label>
          <input type="number" id="taille" className="form-control" ref={tailleRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="poids" className="form-label">Poids: </label>
          <input type="number" id="poids" className="form-control" ref={poidsRef}/>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: </label>
          <input type="date" id="date" className="form-control" ref={dateRef} />
        </div>

        <button className="btn btn-secondary">Enregistrer</button>

      </form>
    </>
  )
}

export default UserForm