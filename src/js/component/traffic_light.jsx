// import React, { useState } from "react";

// const TrafficLight = () => {
//     const [color, setColor] = useState("red");
//     return (
//         <div className="container">
//             <div className="poste col"></div>
//              <div className="semaforo col">

//                 <button className={color === "red" ? "red glow-red": "red"} onClick={() => {
//                     setColor("red");
//                 }}></button>


//                 <button className={color === "yellow" ? "yellow glow-yellow": "yellow"} onClick={() => {
//                     setColor("yellow");
//                 }}></button>


//                 <button className={color === "green" ? "green glow-green": "green"} onClick={() => {
//                     setColor("green");
//                 }}></button>

//             </div>
//         </div>
//     );
// };
// export default TrafficLight;

import React, { useState } from 'react';

const Semaforo = () => {
	const [color, setColor] = useState("red");

	const changeColor = () => {
		if (color === "red") {
			setColor("green");
		} else if (color === "green") {
			setColor("yellow");
		} else {
			setColor("red");
		}
	};

	const addPurple = () => {
		setColor("purple");
	};
	return (
		<div className='container'>
			<div className='poste'></div>
			<div className="semaforo">
				<div
					className={`red ${color === "red" ? "glow-red" : ""}`}
					onClick={() => setColor("red")}
				></div>
				<div
					className={`yellow ${color === "yellow" ? "glow-yellow" : ""}`}
					onClick={() => setColor("yellow")}
				></div>
				<div
					className={`green ${color === "green" ? "glow-green" : ""}`}
					onClick={() => setColor("green")}
				></div>
				{color === "purple" && (
					<div
						className={`purple ${color === "purple" ? "glow-purple" : ""}`}
						onClick={() => setColor("purple")}
					></div>
				)}
			</div>
			<div className='container-button'>
			<button onClick={changeColor} className='button'>Cambiar Color</button>
			<button onClick={addPurple} className='button'>Agregar morado</button>
			</div>
		</div>
	);
};

export default Semaforo;

