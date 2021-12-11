import './header.css';
import author from '../assets/images/author.jpg';
import blog from '../assets/images/blog.jpg';

export default function Header() {
	return(
		<header>
			<div>
				<h3 className="timing">Jul 19 . 3 min read</h3>
				<h1>How to become MICROSOFT LEARN STUDENT AMBASSADOR-Everything you need to know!</h1>
				<div id="exception">
					<div className="author-name">
						<h3>by&nbsp;<a href="">Riya Rajput</a></h3>
					</div>
					<div className="author-img"><img src={author}/></div>
				</div>
				<div className="header-img">
					<img src={blog}/>
				</div>
			</div>
		</header>
	);
}