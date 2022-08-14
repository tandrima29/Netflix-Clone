export default function Button(props) {
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            isDisabled={props.isDisabled}
        >
            {props.label || "Submit"}
        </button>
    )
}