import React from "react";

//sections jsx
import Card from "./card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./NavBar.jsx";
import FooterBottom from "./FooterBottom.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
		<div className="container">
			<Jumbotron/>
			<Card/>
		</div>
			<FooterBottom/>
</div>
	);
};

export default Home;

//create your first component
/*const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hola es Miguel</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};
*/

