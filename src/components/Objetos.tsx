import { useEffect, useState } from "react"

interface Sub {
  nick: string,
  subMoths: number,
  avatar: string,
  description?: string
}

// otra forma de anidar interfases
interface Appstate  {
  subs:  Array<Sub>
  //subs:  Sub[]
}

const USERS:Sub[] = [{
  nick: 'dapeli',
  subMoths: 3,
  avatar: 'https://i.pravatar.cc/300',
  description: 'modethador'
},
{
  nick: 'jorge',
  subMoths: 4,
  avatar: 'https://i.pravatar.cc/301',

}]

const Objetos = () => {
  const [subs, setSubs] = useState<Appstate["subs"]>([]) // <Sub[]> otro modo de declararlo // <Array<Sub>>
  useEffect(() =>{
    setSubs(USERS)
  },[])
  return (
    <>
      <h1>Subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <>
              <li key={sub.nick}>{sub.nick}</li>
              <img src={sub.avatar} alt="" />
              <h3>{sub.description}</h3>
            </>
          )
        })}
      </ul>
    </>
  )
}
export default Objetos