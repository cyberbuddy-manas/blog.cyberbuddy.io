import link from '../assets/images/link.png';

import './share.css';

export default function Share() {
	return(
		<section>
			<h1>SHARE WITH YOUR FRIENDS</h1>
			<div>
				<figure><h2>https://blog.cyberbuddy.io/tech/How-to-become-MICROSOFT-LEARN-STUDENT-AMBASSADOR-Everything-you-need-to-know!</h2></figure>
				<button>Copy Link <img src={link}/></button>
			</div>
		</section>
	);
}