import './navbar.css';
import logo from '../assets/images/logo.png';

export default function Navbar() {
	return(
		<nav>
			<div>
				<h2>BLOG</h2>
				<h1><span>BLOG</span>.cyberbuddy.io</h1>
			</div>
			<div>
				<h1>CYBERBUDDY</h1>
				<div>
					<a href="#"><button><h2>Login</h2></button></a>
					<a href="#"><button><h2>Join Us</h2></button></a>
				</div>
			</div>
			<div>
				<img src={logo}/>
			</div>
		</nav>
	);
}