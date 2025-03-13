const InputCompany = (props) =>{
    return(
        <div id={props.id}>
            <label htmlFor="">{props.label}</label>
            <input onChange={(event)=>props.setValue(event.target.value)} type="text" value={props.value} />
        </div>
    )
}
export default InputCompany