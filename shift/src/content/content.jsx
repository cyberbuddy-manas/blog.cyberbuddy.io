import instagram from '../assets/images/logos/instagram.png';
import facebook from '../assets/images/logos/facebook.png';
import twitter from '../assets/images/logos/twitter.png';
import blog from '../assets/images/blog.jpg';

import './content.css';

export default function Content() {
	return(
		<main>
			<aside>
				<h2>Riya Rajput</h2>
				<p>WomenTech Network(member) || Microsoft Learn Student Ambassador’21 || GSSOC’21 || Python, Java, JavaScript, C++, C || Frontend.</p>
				<div>
					<a href=""><img src={instagram}/></a>
					<a href=""><img src={facebook}/></a>
					<a href=""><img src={twitter}/></a>
				</div>
			</aside>
			<div>
				<content>
					<h1>WHAT IS MICROSOFT LEARN STUDENT AMBASSADOR?</h1>
					<p>The Microsoft Learn Student Ambassadors is a program to sponsor students majoring in disciplines related to technology. The MSP program enhances students’ employability by offering training in skills not usually taught in academia, including knowledge of Microsoft technologies.</p>
					<p>The best part of being in the program is the opportunity to network with a global community. Being a Student Ambassador gives you the experience of working with a team, connects you with other students and Microsoft employees, and equips you with leadership skills. … Being a Student Ambassador also means being a mentor.</p>
					<h1>WHO ARE ELIGIBLE FOR THIS?</h1>
					<ul>
						<li>Be at least 16 years old at the time of submission.</li>
						<li>Be enrolled full-time in an accredited academic institution (e.g. college, University).</li>
						<li>Have valid identification.</li>
					</ul>
					<h1>WHEN TO APPLY FOR MLSA?</h1>
					<p>Applications are open throughout the year and are reviewed quarterly. So you can apply any time and the results will be declared in the next quarter. You can also reapply if your application has been rejected previously.</p>
					<h1>WHAT ARE THE PERKS TO BE AN MLSA</h1>
					<figure>
						<img src={blog}/>
						<h4>MY SWAG KIT(u get when u reach a beta milestone in MLSA)</h4>
					</figure>
					<ul>
						<li>Exposure to be in the talented pool all across the world(networking)</li>
						<li>Office 365 subscription</li>
						<li>Visual Studio Enterprise and Azure credits worth $150/month</li>
						<li>Linkedin Learning 6 month free subscription</li>
						<li>Free Microsoft training on Microsoft Learn Platform</li>
						<li>Invitation to Microsoft regional, national, and sometimes international events including Microsoft Student Summit, Ignite, etc.</li>
						<li>Exclusive swags, badges, and accessories from Microsoft.</li>
						<li>Also, this great achievement can highlight your portfolio.</li>
					</ul>
					<figure>
					<img src={blog}/>
					<h4>my profile <a href="https://www.linkedin.com/in/riya-rajput-23400a200/">https://www.linkedin.com/in/riya-rajput-23400a200/</a> let’s connect</h4>
					</figure>
					<h1>How to take a good video or write a good essay?</h1>
					<p>Try to keep these points in mind:</p>
					<ul>
						<li>Through these three areas(Inspire, Teach, Promote), Microsoft is trying to see how good and excited you are about what you do. So, presenting your authentic and fresh ideas would be a plus. Try not to lie.</li>
						<li>Microsoft has no intention of judging you on your video editing skills. So try not to over-edit your video with effects and filters pushing the main content(i.e your voice) to the background.</li>
						<li>You can take references from youtube and other blogs about what applications have been selected BUT try your own imagination and creativity.</li>
					</ul>
				</content>
			</div>
		</main>
	);
}