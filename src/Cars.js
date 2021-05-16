import React, { useEffect, useState } from  'react'
import axios from 'axios';

const Cars=()=>{ 
	const [state, setState] = React.useState({
		manufacture : "",
		carName : "",
		carType : "",
		color : ""
	})
	const handleInput=(e)=>{
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value
		});
	}
	const handleSubmit=()=>{
		debugger
		const data={
			manufacture: state.manufacture,
			carName: state.carName,
			carType: state.carType,
			color: state.color
		}
		axios.post('https://graph.microsoft.com/v1.0/me/onenote/sections/${data}/pages')
		.then((res) => {
			console.log(res)
		})
		.catch((error) => {
			console.error(error)
		})
	}
	return(
		<>
		<label>ManuFacture:</label>
		<input type="text" name="manufacture" onChange={(e) => handleInput(e)} /><br/>

		<label>Name of the car:</label>
                <input type="text" name="carName" onChange={(e) => handleInput(e)} /><br/>

		<label>Type of the car:</label>
                <input type="text" name="carType" onChange={(e) => handleInput(e)} /><br/>

		<label> Color of the car:</label>
                <input type="text" name="color" onChange={(e) => handleInput(e)} /><br/>
		<button onClick={handleSubmit}> Submit</button>
		</>
	)
}
export default Cars
