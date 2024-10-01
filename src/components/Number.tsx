import { useState } from "react"


const Number = () => {
    const [number, setNumber] = useState<number>(0)
  return (
    <>
    <div>{number}</div>
    <button onClick={() => {setNumber(1)}}>SetNumber</button>
    </>
  )
}
export default Number