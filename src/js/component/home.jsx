import React, { useState }from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])
	return (
		<div className="container mt-5 border">
			<h1>Tareas</h1>
			<ul>
				<li><input 
					type="text"
					value={inputValue}
					onChange={(e) => 
						 setInputValue(e.target.value)}
					onKeyDown={(e)=> e.key == "Enter" ? setTareas (tareas.concat(inputValue)): null}
					placeholder="Nuevas tareas" />
					<button onClick={() =>{setTareas("")}}><i className="fa-solid fa-xmark"></i></button>
					
				</li>
				{tareas.map((t)=>(
				<li className="mt-1">
					{t} <i className="fa-solid fa-xmark"></i>
				</li>))}

			</ul>
			<div className="container  border-top mb-none">
				<p>24 tareas</p>
			</div>
		</div>
	);
};

export default Home;
