import React from "react";


const Card=( {robot, key})=>{

	return (
		<div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5" >
			<img src={`https://robohash.org/${robot.id}?size=200x200`} alt='robots' />
			<h2> {robot.name}	</h2>
			<p> {robot.email}	</p>
		</div>
	);
}

export default Card;
