import { useSelector } from "react-redux"

const CounterPrevious = () => {
    const count = useSelector((state) => state.count)
  return (
    <div>
        <h2>Dado repassado</h2>
    {count}
    </div>
  )
}

export default CounterPrevious
