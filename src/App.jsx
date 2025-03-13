import { useState } from "react"

const App = () => {
    const [heading, setHeading]= useState("Monkeyss");
    const clickHandler = () => {
        setHeading("Banana");
    };
    return (
        <>
        <button type="button" onClick={clickHandler}>
            Click Me
            </button>
            <h1>{heading}</h1>
            </>
    )
}

export default App