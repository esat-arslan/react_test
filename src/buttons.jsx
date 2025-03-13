function Button(props){
    const buttonSytle = {
        backgroundColor: props.color,
        border: 'none',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '4px 2px',
        cursor: 'pointer',
        fontSize: props.fontSize+'px'
    };
    return(
        <button style={buttonSytle}>{props.text}</button>);
}
function ButtonAlternate({text="Click Me!", color, fontSize}){
    const buttonSytle = {
        color: color,
        fontSize: fontSize+'px'
    };
    return <button style={buttonSytle}>{text}</button>;
}
function ButtonLink({text="Click Me!", color, fontSize, handleClick}){
    const buttonSytle = {
        color: color,
        fontSize: fontSize+'px'
    };
    return(
        <button onClick={handleClick} style={buttonSytle}>{text}</button>
    );
}
export default function ButtonContainer(){
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    }
    const handleButtonClick2 = (URL) => {
        window.location.href = URL;
    }
    return(
        <div className="button-container">
            <Button text="Button 1" color="red" fontSize={12}/>
            <Button text="Button 2" color="green fontSize={14}"/>
            <Button text="Button 3" color="blue" fontSize={16}/>
            <ButtonAlternate text="Button 4" color="yellow" fontSize={18}/>
            <ButtonLink text="Button 5" color="orange" fontSize={20} handleClick={handleButtonClick}/>
            <ButtonLink handleClick={()=>handleButtonClick2("https://www.google.com")} text="Button 6" color="purple" fontSize={22}/>
        </div>
    );
}