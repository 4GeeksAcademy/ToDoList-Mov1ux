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
					//onKeyDown={(e)=> e.key == "Enter" ? setTareas (tareas.concat(inputValue)): null}
					onKeyDown={(e) =>
						e.key === "Enter" && inputValue !== ""
						  ? (setTareas(tareas.concat(inputValue)), setInputValue(""))
						  : null
					  }
					  placeholder="Nuevas tareas"
					/>
					<button onClick={() =>{setTareas("")}}><i className="fa-solid fa-xmark"></i></button>
					
				</li>
				{tareas.map((item,index)=>(
				<li className="mt-1">
					{item} <i className="fa-solid fa-xmark"onClick={()=> 
						setTareas(
							tareas.filter(
								(t,newarray)=>
									index != newarray))}></i>
				</li>))}
			</ul>
			<div className="container  border-top mb-none">
				{tareas.length === 0 ?(<p>Añadir tareas</p>):(`${tareas.length} Tarea por finalizar`)}
			</div>
		</div>
	);
};

export default Home;
