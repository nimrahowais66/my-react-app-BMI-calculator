// import { useState } from 'react';

// export default function UserForm() {
//     const [weight, setWeight] = useState("");
//     const [height, setHeight] = useState("");
//     const [bmi, setBmi] = useState(null);
//     const [who, setWho] = useState("");

//     function handleWeightChange(e) {
//         setWeight(e.target.value);
//         const newBmi = calculate();
//         setBmi(newBmi);
//         const newWho = category(newBmi);
//         setWho(newWho);
//     }

//     function handleHeightChange(e) {
//         setHeight(e.target.value);
//         const newBmi = calculate();
//         setBmi(newBmi);
//         const newWho = category(newBmi);
//         setWho(newWho);
//     }

//     function handleCalculate(e) {
//         e.preventDefault();
//         alert(`BMI: ${bmi}, Category: ${who}`);
//         // return <p>${bmi}</p>;
//     }

//     function handleReset(e) {
//         e.preventDefault();
//         setWeight("");
//         setHeight("");
//         setBmi(null);
//         setWho("");
//     }

//     function calculate() {
//         if (!weight || !height || height === 0 || weight === 0 || height < 0 || weight < 0) {
//             return null;
//         }
//         const newBmi = weight / ((height) ** 2);
//         return(
//             newBmi.toFixed(1)
//         );
//     }

//     function category(bmi) {
//         let newWho = "";
//         bmi.toFixed(1)
//             if (bmi < 18.5) {
//                 newWho = "Underweight";
//             }
//             else if (bmi >= 18.5 && bmi < 24.9) {
//                 newWho = "Normal weight";
//             }
//             else if (bmi >= 25 && bmi < 29.9) {
//                 newWho = "Overweight";
//             }
//             else if (bmi >= 30) {
//                 newWho = "Obese";
//             }
//         return newWho;
//     }

//     return (
//         <form>
//             <label> Enter your Weight (in kgs): 
//                 <input 
//                 type="number" 
//                 value={weight} 
//                 onChange={handleWeightChange} />
//             </label>
//             <br />
//             <label> Enter your height (in m): 
//                 <input
//                 type="number"
//                 value={height}
//                 onChange={handleHeightChange} />
//             </label>
//             <button onClick={handleCalculate}>Calculate BMI</button>
//             <button onClick={handleReset}>Reset</button>
//             <p>BMI: {bmi}, Category: {who}</p>
//         </form>
//     )
// }

import { useState } from 'react';

function getBmi(weight, height) {
    const w = Number(weight);
    const h = Number(height);
    if (!w || !h || w <= 0 || h <= 0) return null;
    return w / (h ** 2);
}

function getCategory(bmi) {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
}

export default function UserForm() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const bmi = getBmi(weight, height);
    const category = getCategory(bmi);

    function handleCalculate(e) {
        e.preventDefault();
        if (bmi === null) {
            alert("Please enter a valid weight and height.");
            return;
        }
        alert(`BMI: ${bmi.toFixed(1)}, Category: ${category}`);
    }

    function handleReset(e) {
        e.preventDefault();
        setWeight("");
        setHeight("");
    }

    return (
        <form>
            <label>
                Enter your weight (in kgs):
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </label>
            <br />
            <label>
                Enter your height (in m):
                <input
                    type="number"
                    step="0.01"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleCalculate}>Calculate BMI</button>
            <button onClick={handleReset}>Reset</button>
            <p>
                BMI: {bmi !== null ? bmi.toFixed(1) : ""}, Category: {category}
            </p>
        </form>
    );
}