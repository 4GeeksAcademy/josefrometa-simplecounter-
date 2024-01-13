import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faSolid } from "@fortawesome/free-solid-svg-icons"


import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";

const Home = (props) => {
	return (
		<body className="bg-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
		<div className="container bg-dark">
		<div className="d-flex text-center justify-content-center bg-dark text-light">
			<FontAwesomeIcon icon = {faClock} size="2xl" className=" m-2 py-5 text-center justify-content-center p-4 border border-gray rounded"/>

			<div className="m-2 p-4 border border-gray rounded d-flex align-items-center">
				<h1>{props.five}</h1>
			</div>
			<div className="m-2 p-4 border border-gray rounded d-flex align-items-center">
				<h1>{props.four}</h1>
			</div>
			<div className="m-2 p-4 border border-gray rounded d-flex align-items-center">
				<h1>{props.three}</h1>
			</div>
			<div className="m-2 p-4 border border-gray rounded d-flex align-items-center">
				<h1>{props.two}</h1>
			</div>
			<div className="m-2 p-4 border border-gray rounded d-flex align-items-center">
				<h1>{props.one}</h1>
			</div>
			
		</div>
		</div>
	</body>
	);
};

export default Home;
