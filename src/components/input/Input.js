export default function Input() {
    function handleChange(e) {
        const inputFieldValue = e.taregt.value;
        props.onChange(inputFieldValue, props.fieldName)
    }
    return (
        <div>
            <input type={props.type} onChange={handleChange}/>
        </div>
    )
}