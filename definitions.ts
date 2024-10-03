export type Sub = {
    nick: string,
    subMoths: number,
    avatar: string,
    description?: string
}

export type Props = {
    subs: Sub[]; // subs es un array de objetos Sub
};