const person = {
    name: 'Gregorio Y. Zara',
    theme:{
        backgroundColor: 'black',
        color:'pink'
    },
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
};
export default function TodoList(){
    return(
        <>
        <div style={person.theme}>
            <h1>{person.name}&apos;s Todos</h1>
        </div>
        <ul style={{backgroundColor: 'green',
            color: 'pink',
        }}>
            <li>Improve the videophone</li>
            <li>Preapre the aero</li>
            <li>Work on the alcohol</li>
            </ul>
        <h1>Hedy Lamarr&apos;s Todos</h1>
        <img 
        className="avatar"
        src={person.imageUrl}
        alt="Hedy Lamarr" />
    <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
    </ul>
        </>
    )
}