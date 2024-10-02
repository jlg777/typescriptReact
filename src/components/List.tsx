import {Props} from '../../definitions'

const List = ({ subs }: Props) => {
    return (
        <>
            <ul>
                {subs.map((sub) => {
                    return (
                        <>
                            <li key={sub.nick}>{sub.nick}
                                <img src={sub.avatar} alt="" />
                                <p>Suscrito ({sub.subMoths})</p>
                                <h3>{sub.description}</h3>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}
export default List

