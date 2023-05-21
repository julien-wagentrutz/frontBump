import React, {useState} from "react"
import Button from "../../../components/Button/Button";
import InputText from "../../../components/InputText/InputText";
import Notification from "../../../components/Notification/Notification";

interface PropsStepInformation {
	nextStep: () => void;
	onChangeInputValue: (key: string, answer: string) => void;
	onError: (key: string, value: boolean) => void;
	data: any;
}

const StepInformation: React.FC<PropsStepInformation> = ({
	nextStep,
	onChangeInputValue,
	onError,
	data
}) => {
	const [errorMsg, setErrorMsg] = useState("");

	const handleNextStep = () => {
		if(data.concept?.value ) {
			for(const [key, value] of Object.entries<any>(data)) {
				const pattern = RegExp('/^https?:\/\/(?:www\.)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+([a-zA-Z\.]{2,6})\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/','')
				if(key !== "concept" && !pattern.test(value.value || '') &&  value.value !== "")
				{
					return setErrorMsg("Format de l'url incorrecte");
				}
			}
			nextStep();
		} else {
			onError("concept", true)
			setErrorMsg("Vous devez décrire le concept de votre restaurant")
		}
	}

	return (
		<section className="demo-information">
			<div>
				<h2 className="title-h2">Dites-nous en plus</h2>
				<p className="text mt-8">Pour générer les radios les plus adaptées à votre identité de marque, nous avons besoin d’en savoir plus sur votre établissement.</p>
			</div>
			<div>
				<h3 className="title-h3 mb-16">Décrivez le concept de votre établissement en une phrase</h3>
				<InputText
					onChange={onChangeInputValue}
					name="concept"
					value={data.concept?.value}
					required
					placeholder="Restaurant italien qui se spécialise dans la cuisine milanaise. Son concept allie traditions et modernité."
				/>
				<Notification
					className="mt-16"
					title="Besoin d’aide pour définir le concept ?"
					content="Importer des photos, votre site internet ou votre compte instagram pour que notre outil analyse vôtre présence digitale et vous aide à mettre des mots sur votre concept."
					linkText="Tester l’outil"
				/>
			</div>
			<div>
				<h3 className="title-h3 mb-16">Quel est le lien de votre site internet ? </h3>
				<InputText
					onChange={onChangeInputValue}
					value={data.website?.value}
					name="website"
					placeholder="Lien de mon site"
				/>
			</div>
			<div className="demo-information-links">
				<h3 className="title-h3 mb-16">Présence en ligne</h3>
				<div>
					<div className="inline-input">
						<InputText
							onChange={onChangeInputValue}
							value={data.instagram?.value}
							name="instagram"
							label="Instagram"
							placeholder="Lien Instagram"
						/>
						<InputText
							onChange={onChangeInputValue}
							value={data.facebook?.value}
							name="facebook"
							label="Facebook"
							placeholder="Lien Facebook"
						/>
					</div>
					<div className="inline-input">
						<InputText
							onChange={onChangeInputValue}
							value={data.the_fork?.value}
							name='the_fork'
							label="The Fork"
							placeholder="Lien The Fork"
						/>
						<InputText
							onChange={onChangeInputValue}
							value={data.trip_advisor?.value}
							name="trip_advisor"
							label="Trip advisor"
							placeholder="Lien Trip advisor "
						/>
					</div>
					<div className="inline-input">
						<InputText
							onChange={onChangeInputValue}
							value={data.google_maps?.value}
							name="google_maps"
							label="Google Maps"
							placeholder="Lien Google Maps"
						/>
						<InputText
							onChange={onChangeInputValue}
							value={data.tik_tok?.value}
							name="tik_tok"
							label="Tik Tok"
							placeholder="Lien Tik Tok"
						/>
					</div>
				</div>
			</div>
			<p className="error-text">{errorMsg}</p>
			<div className="demo-information-submit">
				<p className="link-button-text gray-60">1/2</p>
				<Button text="Lancer la démo" onClick={handleNextStep}/>
			</div>
		</section>
	)
}

export default StepInformation;