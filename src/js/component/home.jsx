import React, { useState, useEffect }from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [toDos, setToDos] = useState([])
	const urlTodo = "https://playground.4geeks.com/apis/fake/todos/user/Mov1ux"
	const createToDoList = ()=> {
		fetch (urlTodo, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		}) 
		.then((response)=>{return response.json()}) 
		.then((data)=>{getAllTask()}) 
		.catch((err)=>{return err})
	}	
	const getAllTask = ()=> {
		fetch(urlTodo) 
		.then((response)=>{
			if (response.ok){
				return response.json()
			}
			else {
				if(response.status===404){
					createToDoList()
				}
			}
		}) 
		.then((data)=>{setToDos(data),console.log(data)}) 
		.catch((err)=>{return err})
	}
	const addTask = (value)=>{
		const newTask = {
			label: value,
			done : false,
		}
		const upDateList = [...toDos,newTask]
		const putOptions = {
			method: "PUT",
			body: JSON.stringify(upDateList),
			headers: {'Content-Type': 'application/json'}
		}
		fetch (urlTodo,putOptions) 
		.then((response)=>{return response.json()}) 
		.then((data)=>{
			setInputValue("")
			getAllTask()}) 
		.catch((err)=>{return err})
	}
	
	useEffect (()=> {
		getAllTask()
	},[])
	return (
		<div className="container mt-5 border">
			<h1>To Dos</h1>
			<ul>
				<li><input 
					type="text"
					value={inputValue}
					onChange={(e) => 
						 setInputValue(e.target.value)}
					//onKeyDown={(e)=> e.key == "Enter" ? setToDos (toDos.concat(inputValue)): null}
					onKeyDown={(e) =>
						e.key === "Enter" && inputValue !== ""
						  ? addTask (inputValue)
						  : null
					  }
					  placeholder="Nuevas toDos"
					/>
					<button onClick={() =>{setInputValue("")}}><i className="fa-solid fa-xmark"></i></button>
					
				</li>
				{toDos.map((item,index)=>(
				<li className="mt-1" key={index}>
					{item.label} <i className="fa-solid fa-xmark"onClick={()=> 
						setToDos(
							toDos.filter((t,newarray) => index != newarray))}></i>
				</li>))}
			</ul>
			<div className="container  border-top mb-none">
				{toDos.length === 0 ?(<p>Añadir toDos</p>):(`${toDos.length} Tarea por finalizar+`)}
			</div>
		</div>
	);
};

export default Home;
