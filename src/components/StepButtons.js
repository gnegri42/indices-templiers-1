import { useEffect, useState } from "react";
import stepCodes from "./data/stepCodes";
import buttonsContent from "./data/buttonsContent";

function StepButtons ( {actualStep, updateStepUp, updateStepDown} ) {
    var [isCodeOk, setIsCodeOk] = useState(false);
    const buttonContent = buttonsContent.filter(button => (button.step === actualStep));

    useEffect(() => {
    })

    function checkCode() {
        const codeToFind = stepCodes.filter(code => (code.step === actualStep));
        var playerCode = prompt(codeToFind[0].text);
        if (playerCode === codeToFind[0].code)
            updateStepUp();
    }

    return(
        <div className="step-buttons">
            {actualStep < 6 && buttonContent[0].next &&
                <button className="button-20" onClick={() => {
                    checkCode();
                }}>
                    {buttonContent[0].text}
                </button>
            }
            {actualStep > 1 &&
                <button className="button-20" onClick={() => {
                    updateStepDown();
                }}>
                    Revenir à l'étape précédente
                </button>
            }
        </div>
    )
}

export default StepButtons