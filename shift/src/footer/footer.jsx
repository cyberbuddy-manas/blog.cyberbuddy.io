import './footer.css';
import logo from '../assets/images/logo.png';
import arrow from '../assets/images/arrow.png';
import post from '../assets/images/post.png';

export default function Footer() {
	return(
		<>
		<footer id="newsletter">
			<section>
				<h1>Subscribe to our Newsletter</h1>
				<figure>
					<input type="email" placeholder="Enter your email address"/>
					<div><img src={arrow}/></div>
				</figure>
			</section>
			<img src={post}/>
		</footer>
		<footer id="main">
			<figure className="over"></figure>
			<figure>
				<div>
					<span className="branding-foo">
						<img src={logo}/>
						<span>
							<h1>CYBERBUDDY</h1>
							<h3>Your Online Partner</h3>
						</span>
					</span>
					<span className="social-foo">
						<h2>Follow us on</h2>
						<span>	{/*this span is not of use as of now*/}
							<a href="#"><img src="https://fakeimg.pl/35x35"/></a>
							<a href="#"><img src="https://fakeimg.pl/35x35"/></a>
							<a href="#"><img src="https://fakeimg.pl/35x35"/></a>
							<a href="#"><img src="https://fakeimg.pl/35x35"/></a>
							<a href="#"><img src="https://fakeimg.pl/35x35"/></a>
						</span>
					</span>
				</div>
				<div>
					<h1 className="heading">Contact Us</h1>
					<ul>
						<li><img src="https://fakeimg.pl/20x14"/><a href="#">contact@cyberbuddy.io</a></li>
			            <li><img src="https://fakeimg.pl/20x14"/><a href="#">blog@cyberbuddy.io</a></li>
			            <li><img src="https://fakeimg.pl/20x14"/><a href="#">events@cyberbuddy.io</a></li>
			            <li><img src="https://fakeimg.pl/20x14"/><a href="#">+91-788-857-2592</a></li>
					</ul>
				</div>
				<div>
					<h1 className="heading">Our Products</h1>
					<ul>
						<li><a href="#">Form Builder</a></li>
			            <li><a href="#">Events Lister</a></li>
			            <li><a href="#">Blogging Platform</a></li>
			            <li><a href="#">Pastebin</a></li>
			            <li><a href="#">URL Shortner</a></li>
					</ul>
				</div>
			</figure>
			<p>Copyright 2020-2021 <a href="">&nbsp;Cyberbuddy.io &nbsp;&nbsp;</a>|<a href="">&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;</a>|<a href="">&nbsp;&nbsp;Terms of Service</a></p>
		</footer>
		</>
	);
}