import React, { useEffect, useState } from "react";
import StepInformation from "./Steps/Information";
import StepResult from "./Steps/Result";
import './Demo.scss'





const Demo = () => {
	const [step, setStep] = useState<number>(1)
	const [data, setData] = useState<any>({})
	const [identityItem, setIdentityItem] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [identityFinish, setIdentityFinish] = useState<boolean>(false)
	const [count, setCount] = useState<number>(0)
	
	const onChangeInputValue = (key: string,answer: string) => {
		setData({...data, [key]: {value: answer} })
	}

	const onError = (key: string, value: boolean) => {
		setData({...data, [key]: {error: value} })
	}

	const submitForm = async () => {
		let identity:any = [];
		console.log("start");
		setLoading(true)
		for(let i = 0; i < forms.items.length; i++) {
			
				fetch("https://bumpison.herokuapp.com/api/identity/generate", {
					method: "POST",
					headers: {
					"Content-Type": "application/json",
					},
					body: JSON.stringify(forms.items[i])
				}).then((response) => {
					response.json().then((data: any) => {
						const tags = data.message.split(';')
						setCount(i+1)
						identity = JSON.parse(JSON.stringify(identity));
						identity.push({id: data.id, tags: tags})
						setIdentityItem(identity)
						if(i == forms.items.length-1) {
							setIdentityFinish(true)
							setLoading(false)
						}
				})
			})
			await new Promise((resolve) => setTimeout(() => resolve(true), 30000))
		}
	}

	useEffect(() => {
		console.log(identityItem);
		identityItem.forEach((element:any) => {
			
		});

	}, [identityFinish])


	const steps: React.ReactElement[] = [];
	steps[0] = <StepInformation onError={onError} nextStep={() =>setStep(step +1)}  onChangeInputValue={onChangeInputValue} data={data} />
	steps[1] = <StepResult backStep={() =>setStep(step -1)}  onChangeInputValue={onChangeInputValue} submitForm={submitForm} data={data} />

	return (
		<>
			<div>
				<form>
					{steps[step]}
				</form>
				<div className="resultat mt-18">
					{!identityFinish && loading && (
						<>
							<p className="title-h3">Génération...</p>
							<div className="loading-container mt-10">
								<p>{count}/6</p>
								<div className="bar-loading mt-8">
									<div style={{transform: `scaleX(${(1/6)*count})`}} className="loader"></div>
								</div>
							</div>
						</>
					)}
					{identityFinish && !loading && (
						identityItem.map((item:any, index: number) => (
							<div className="container">
								<p className="title-h3 mt-12" key={item.id}>{item.id}</p>
								<div className="listItems">
									{item.tags.map((tag:any) => (
										<p className="link-button-text item mr-6 mt-8">{tag}</p>
									))}
								</div>
							</div>
						))
					)}
				</div>
				
			</div>
			
			
		</>
	  );
}

export default Demo;

const forms1 = {
	"id": "identity",
	"items": [
		{
			"id":"personality",
			"items": [
				{
					"type":"text",
					"question": "Si votre restaurant était une personne quelle seraient ses principales qualités ?",
					"answer": "Accessible, Rapide, Consistant, Innovant, Familial, Responsable, Varié, Engagé"
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Informel / Formel", 
					"answer": 4.5
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Rustique / Contemporain", 
					"answer": 7
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Amical / Professionnel", 
					"answer": 6
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "décontracté / raffiné", 
					"answer": 3
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Convivial / Luxe", 
					"answer": 2
				},
				{
					"type":"radio",
					"question": "Quelle est l’ambiance générale qui correspond le mieux à votre établissement ? ",
					"answer": "Décontractée et conviviale"
				},
				{
					"type":"radio",
					"question": "Quels type de plats votre restaurant mettra-t-il en avant ? ",
					"answer": "Cuisine internationale"
				},
				{
					"type":"radio",
					"question": "Comment souhaitez-vous que vos clients se sentent lorsqu’ils quittent votre restaurant ?",
					"answer": "Satisfait et rassasiés "
				},
				{
					"type":"radio",
					"question": "Quel niveau de personnalité souhaitez-vous offrir à vos clients ? ",
					"answer": "Proposer une expérience de dégustation unique pour chaque table "
				},
				{
					"type":"radio",
					"question": "Comment voulez-vous que votre restaurant soit perçu par les clients potentiels ? ",
					"answer": "Comme un lieu convivial familiale"
				}
			]
		}
	]
}

const forms = {
	"id": "identity",
	"items": [
		{
			"id":"physique",
			"items": [
				{
					"type":"text",
					"question": "Quels sont les éléments visuels, formes, couleurs qui permettent d’identifier votre restaurant ?",
					"answer": " Notre logo emblématique comprend les célèbres arches dorées formant un 'M'. C'est l'un des symboles les plus reconnaissables dans le domaine de la restauration."
				},
				{
					"type": "color",
					"question": "quels sont les couleur qui définisent votre marque",
					"answer": '["#FF0000", "#FFC72C"]'
				}
			]
		},
		{
			"id":"personality",
			"items": [
				{
					"type":"text",
					"question": "Si votre restaurant était une personne quelle seraient ses principales qualités ?",
					"answer": "Accessible, Rapide, Consistant, Innovant, Familial, Responsable, Varié, Engagé"
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Informel / Formel", 
					"answer": 4.5
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Rustique / Contemporain", 
					"answer": 7
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Amical / Professionnel", 
					"answer": 6
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "décontracté / raffiné", 
					"answer": 3
				},
				{
					"type": "range",
					"range_start":0,
					"range_end": 10,
					"question": "Convivial / Luxe", 
					"answer": 2
				},
				{
					"type":"radio",
					"question": "Quelle est l’ambiance générale qui correspond le mieux à votre établissement ? ",
					"answer": "Décontractée et conviviale"
				},
				{
					"type":"radio",
					"question": "Quels type de plats votre restaurant mettra-t-il en avant ? ",
					"answer": "Cuisine internationale"
				},
				{
					"type":"radio",
					"question": "Comment souhaitez-vous que vos clients se sentent lorsqu’ils quittent votre restaurant ?",
					"answer": "Satisfait et rassasiés "
				},
				{
					"type":"radio",
					"question": "Quel niveau de personnalité souhaitez-vous offrir à vos clients ? ",
					"answer": "Proposer une expérience de dégustation unique pour chaque table "
				},
				{
					"type":"radio",
					"question": "Comment voulez-vous que votre restaurant soit perçu par les clients potentiels ? ",
					"answer": "Comme un lieu convivial familiale"
				}
			]
		},
		{
			"id":"culture",
			"items": [
				{
					"type":"text",
					"question": "Quelles sont les valeurs que vous souhaitez transmettre à travers votre restaurant ?",
					"answer": "Accessibilité, Qualité, Famille, Joie, Service, Responsabilité, Innovation"
				},
				{
					"type":"checkbox",
					"question": "Si votre restaurant était une personne, quelles seraient ses valeurs principales ?",
					"answer": '["Qualité", "respect", "responsabilité"]'
				},
				{
					"type":"text",
					"question": "Si vous deviez choisir un slogan pour votre restaurant, que serait-il ? ",
					"answer": "I’m lovin’ it"
				},
				{
					"type":"text",
					"question": "Si vous pouviez inviter une personnalité célèbre à dîner dans votre restaurant, qui choisiriez-vous et pourquoi ? ",
					"answer": "Nous souhaitons offrir une expérience agréable et accessible à tous nos clients, quelles que soient leurs affiliations ou leur statut."
				},
				{
					"type":"checkbox",
					"question": "Quels sont les trois mots que vous souhaitez que les clients associent à votre restaurant ? ",
					"answer": '["Qualité", "convivialité", "innovation"]'
				}
			]
		},
		{
			"id":"relation",
			"items": [
				{
					"type":"text",
					"question": "Quelle est la nature de la relation que vous souhaitez entretenir avec vos clients ?",
					"answer": "Nous souhaitons entretenir une relation de confiance, de proximité et de fidélité avec nos clients."
				},
				{
					"type":"radio",
					"question": "Si votre restaurant était un personnage, quel serait son tempérament ? ",
					"answer": "Décontracté et convivial"
				},
				{
					"type":"radio",
					"question": "Quel type d’expérience souhaitez-vous offrir à vos clients ? ",
					"answer": "conviviale et chaleureuse"
				},
				{
					"type":"checkbox",
					"question": "Quels sont les mots qui décrivent le mieux votre relation avec vos clients ? ",
					"answer": '["amical", "attentionné", "professionnel"]'
				},
				{
					"type":"checkbox",
					"question": "Comment voulez-vous que vos clients se sentent en quittant votre restaurant ? ",
					"answer": '["Satisfaits et comblés", "Heureux et joyeux"]'
				}
			]
		}
	]
}