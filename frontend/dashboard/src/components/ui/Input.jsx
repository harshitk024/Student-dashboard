const Input = ({placeholder,type, onChange,value}) => {

    return (
        <div>
            <input class = "px-10 py-3 rounded-xl border border-[rgba(0,0,0,0.4)] text-left" value = {value} placeholder={placeholder} type = {type} onChange={onChange}/>
        </div>
    )
}

export default Input;