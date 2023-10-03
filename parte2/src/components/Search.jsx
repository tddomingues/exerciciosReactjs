import { useState } from "react"
import { useNavigate} from "react-router-dom"

const Search = () => {
    const [valueSearch, setValueSearch] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(valueSearch)
        navigate("/search?q=" + valueSearch)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
            <input type="text" name="" id="" onChange={(e) => setValueSearch(e.target.value)} value={valueSearch}/>
        </label>
        <button>Pesquisar</button>
      </form>
    </div>
  )
}

export default Search
