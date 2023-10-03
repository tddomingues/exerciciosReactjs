import { useParams } from "react-router-dom"

const User = () => {
    const {userId} = useParams()

  return (
    <div>
      <h1>ID do usuário</h1>
      <p>ID: {userId}</p>
    </div>
  )
}

export default User
