import React from "react";
import './Notification.scss'

interface PropsNotification {
	title: string;
	content: string;
	linkText?: string;
	className?: string;
}

const Notification:React.FC<PropsNotification> = ({
	title,
	content,
	linkText,
	className
}) => {
	return (
		<div className={`notification-container ${className}`}>
			<p className="link-button-text">{title}</p>
			<p className="mt-8 text">{content}</p>
			<a href="#" className="mt-8 link-text">{linkText}</a>
		</div>
	)
}

export default Notification