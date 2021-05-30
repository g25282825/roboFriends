import React,{useState, useEffect} from "react";

const SearchBox=( {onSearchChange})=>{

	

	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type="search" placeholder="Search" onChange={onSearchChange}/>
		</div>
	);
}

export default SearchBox;