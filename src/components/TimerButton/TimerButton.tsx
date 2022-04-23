import './TimerButton.css';


type propsType = {
    id:string
    className:string
    buttonAction: () => void
    buttonValue: string
    disabled:boolean
}


function TimerButton({ id, className, buttonAction, buttonValue, disabled }: propsType) {
    return(
    <button className= "button-container" onClick={buttonAction} disabled={disabled}  data-testid = {id}>
        
        <p className={`${className}`}>{buttonValue}</p>
    </button>
    )
}

export default TimerButton