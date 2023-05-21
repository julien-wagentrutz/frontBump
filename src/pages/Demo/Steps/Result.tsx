import React from "react"
import Button from "../../../components/Button/Button";
import InputText from "../../../components/InputText/InputText"
import demoImage from "../../../assets/images/demo.png"

interface PropsStepResultat {
	onChangeInputValue: (key: string, answer: string) => void;
	backStep: () => void;
	submitForm: () => void;
	data: any;
}

const StepResult: React.FC<PropsStepResultat> = ({
	onChangeInputValue,
	backStep,
	submitForm,
	data
}) => {
	return (
		<section className="demo-result">
			<div className="kmi-container">
				<h3 className="title-h3 mb-16">Let's Go</h3>
				<p className="text mb-16">L’analyse de votre établissements peut prendre quelques minutes. Démonstration avec les réponses pré enregistré d'un restaurateur</p>
				<a className="mb-8" href="https://docs.google.com/forms/d/e/1FAIpQLSfHzq4N4P94uiilXMfy6DfYKWgSU__WS6W_DARMZ6H_fcyknA/viewform">Lien du formulaire</a>
				<div className="inline-container">
					<Button text="Générer" onClick={submitForm} />
				</div>
			</div>
			<div className="illustration">
				<img src={demoImage} alt="" />
			</div>
		</section>
	)
}

export default StepResult