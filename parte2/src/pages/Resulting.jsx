
import { useSearchParams } from "react-router-dom"

const Resulting = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    
  return (
    <div>
        <h1>Resultado do query: </h1>
        <p>{query}</p>
      
    </div>
  )
}

export default Resulting
