import { useEffect, useState } from 'react';
import indicesData from './components/data/indicesData';
import StepButtons from './components/StepButtons';

function App() {
	var [step, setStep] = useState(1);
	var [openedObject, setOpenedObject] = useState(null);
	var [showAnswer, setShowAnser] = useState(false);
	const indicesFilter = indicesData.filter(indice => (indice.enigme === step));

	useEffect(() => {
		// Close popup with escape
        document.addEventListener("keydown", closeWithEscape, false);
    
        return () => {
			document.removeEventListener("keydown", closeWithEscape, false);
        };
    });

	function displayObjectName(object) {
		setOpenedObject(object);
		setShowAnser(false);
		const indiceContainer = document.querySelector("[data-indice=" + object + "]")
		if (indiceContainer.classList.contains("hidden"))
			indiceContainer.classList.remove("hidden");
		else {
			indiceContainer.classList.add("hidden");
			setOpenedObject(null);
		}
	}

	function closeWithEscape(e) {
        const keyPressed = e.key;
        if (keyPressed === "Escape" && openedObject)
		{
			const indiceContainer = document.querySelector("[data-indice=" + openedObject + "]")
			indiceContainer.classList.add("hidden");
		}
    }

	function updateStepUp() {
		setStep(step + 1);
	}

	function updateStepDown() {
		setStep(step - 1);
	}

	// Creating indices Array to filter depending on the step the player is at
	const indicesList = indicesFilter.map((object, index) => {
		return(
			<div key={index}>
				<img className="object-image" src={object.url} alt={object.name} onClick={() => displayObjectName(object.name)}></img>
				<p>{object.name}</p>
					<div className="indice-container hidden flex-js" data-indice={object.name} >
						<button className="closeButton" onClick={() => displayObjectName(object.name)}>X</button>
						{object.indice1 &&
							<details>
								<summary>Indice 1</summary>
								<p>{object.indice1}</p>
							</details>
						}
						{object.indice2 &&
							<details>
								<summary>Indice 2</summary>
								<p>{object.indice2}</p>
							</details>
						}
						{object.indice3 &&
							<details>
								<summary>Indice 3</summary>
								<p>{object.indice3}</p>
							</details>
						}
						{object.indice4 &&
							<details>
								<summary>Indice 4</summary>
								<p>{object.indice4}</p>
							</details>
						}
						{object.reponse &&
							<details>
								<summary>Reponse</summary>
								{showAnswer ?
									<p>{object.reponse}</p>
								:
									<>
										<p>Voulez-vous vraiment voir la réponse ?</p>
										<button onClick={() => setShowAnser(true)}> Oui </button>
									</>
								}
							</details>
						}
					</div>
			</div>
		)
	});

	return (
		<div className="app">
			<h1>L'héritage des templiers</h1>
			<h2>Etape {step}</h2>
			<div className="objects">
				{// Display indices objects depending on the step the player is at
				}
				{indicesList}
			</div>
			<StepButtons actualStep={step} updateStepUp={updateStepUp} updateStepDown={updateStepDown} />
		</div>
	);
}

export default App;
