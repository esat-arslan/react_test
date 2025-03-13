const InputEmail = (props) => {
    return(
        <div id={props.id}>
            <label htmlFor="">{props.label}</label>
            <input onChange={(event)=>props.setValue(event.target.value)} type="email" value={props.value} />
        </div>
    )
}
export default InputEmail