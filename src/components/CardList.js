import React,{useState, useEffect} from "react";
import Card from './Card';

const CardList=( {robots} )=>{

	const cardComponents = robots.map((user,i)=>{
		return <Card robot={robots[i]} key={i}/>;
	})

	return (

		<div>
			{cardComponents}
		</div>		
	);
}


export default CardList;