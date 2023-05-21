import React, { useRef } from "react";
import './InputText.scss'

interface PropsInputText {
	onChange: (key:string, inputValue: string) => void;
	label?: string;
	placeholder?: string;
	className?: string;
	name: string;
	value?: string;
	required?: boolean;
	type?: string;
	error?: boolean;
}


const InputText: React.FC<PropsInputText> = ({
	onChange,
	label,
	placeholder,
	name,
	className,
	value,
	required,
	error,
	type
}) => {
	const inputDOM = useRef<HTMLInputElement>(null)

	const handleChange = (event:any) => {
		onChange(name, inputDOM.current?.value || "")
	}

	const handleBlur = () => {
		// if(pattern) {
		// 	new RegExp(pattern, '').test(inputDOM.current?.value || "") || inputDOM.current?.value === "" ? setMsgError('') : setMsgError('Url incorrect');
		// }
	}

	return(
		<div className={`input-text ${className} ${error? 'input-error' : ''}`}>
			{label ? (
				<label className="text-cap mb-6">{label}</label>
			) : (<></>)}
			<input 
				ref={inputDOM}
				name={name}
				type={type}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
				className="text"
				placeholder={placeholder}
				required={required}
			/>
		</div>
	)
}

InputText.defaultProps = {
	value: "",
	type: "text",
	error: false
}

export default InputText;