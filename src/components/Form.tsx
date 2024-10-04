import { useReducer,  } from "react"
import '../App.css'
import { Sub } from '../../definitions'

const INITIAL_STATE = {
    nick: "",
    subMoths: 0,
    avatar: "",
    description: ""
}

interface FormState {
    inputValue: Sub
}

const formReducer = (state: FormState["inputValue"], action: FormReducer) => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputValue} = action.payload
            return {
                ...state, [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}




type FormReducer = {
    type: "change_value",
    payload: {

        inputName: string
        inputValue: string
    }
    
}|{type: "clear"}

interface FormProps {
    /*onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>*/
    onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
    /*const [inputValue, setInputValue] = useState<FormState['inputValue']>(INITIAL_STATE)*/
    const [inputValue, dispatch] = useReducer(formReducer, INITIAL_STATE);

    //console.log(inputValue)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValue)
        dispatch({type: "clear"})
    }

    /*const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }*/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    /*const handleClear = () => {
        setInputValue(INITIAL_STATE);
    }*/

    const handleClear = () => {
        dispatch({type: "clear"})
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChange} value={inputValue.nick} name='nick' placeholder="nick" />
                <input onChange={handleChange} value={inputValue.subMoths} name='subMoths' placeholder="subMoths" />
                <input onChange={handleChange} value={inputValue.avatar} name='avatar' placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValue.description} name='description' placeholder="description" />
                <button type="button" onClick={handleClear}>Clear</button>
                <button type="submit">Save new sub</button>
            </form>
        </>
    )
}
export default Form