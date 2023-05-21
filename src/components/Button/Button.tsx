import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../Icons/Icons";
import { iconsType } from "../Icons/IconsTypes";
import './Button.scss'


interface ButtonProps {
	onClick?: () => void;
	text: string;
	type?: 'primary' | 'secondary';
	color?: 'black' | 'white';
	size?: 'normal' | 'big';
	iconName?: iconsType;
	redirectTo?: string;
}

const Button: React.FC<ButtonProps>  = ({
	onClick,
	text,
	type,
	color,
	size,
	iconName,
	redirectTo
}) => {

	const navigate = useNavigate();
	const iconColor = type === "primary" ? color === "white" ? "black" : "white" : color

	const handleClick = (event: any) => {
		event.preventDefault()
		if(onClick) {
			onClick()
		}
		if(redirectTo) {
			navigate(redirectTo);
		}
	}

	return (
		<button className={`btn link-button-text btn-${type} btn-${color} btn-${size}`} onClick={handleClick}>
			{ iconName? 
				(<Icons name={iconName} color={iconColor}/>) :
				(<></>)
			}
			{text}
		</button>
	)
}

Button.defaultProps = {
	type: 'primary',
	color: 'black',
	size: 'normal'
};

export default Button;