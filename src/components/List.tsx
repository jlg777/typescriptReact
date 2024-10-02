type Sub = {
    nick: string,
    subMoths: number,
    avatar: string,
    description?: string
}

type Props = {
    subs: Sub[]; // subs es un array de objetos Sub
};
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

