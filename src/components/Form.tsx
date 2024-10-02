import { useState } from "react"
import '../App.css'


const Form = () => {
    const [inputValue, setInputValue] = useState({
        nick: "",
        subMoths: 0,
        avatar: "",
        description: ""
    })
console.log(inputValue)
    const handleSubmit = () => { }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChange}  value={inputValue.nick} name='nick' placeholder="nick" />
                <input onChange={handleChange}  value={inputValue.subMoths} name='subMoths' placeholder="subMoths" />
                <input onChange={handleChange}  value={inputValue.avatar} name='avatar' placeholder="avatar" />
                <textarea onChange={handleChange}  value={inputValue.description} name='description' placeholder="description" />
                <button>Save new sub</button>
            </form>
        </>
    )
}
export default Form