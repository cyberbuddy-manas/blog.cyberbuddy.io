import blog from '../assets/images/blog.jpg';
import arrow from '../assets/images/arrow.png';

import './more.css';

export default function More() {
	return(
		<>
		<hr/>
		<footer id="more-author">
			<h1>More From the Author</h1>
			<div>
				<figure>
					<a href=""><img src={blog}/></a>
					<figcaption>
						<div className="tag food">Food</div>
						<div className="tag movies">Movies</div>
					</figcaption>
					<a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
					<hr/>
					<a href="">
						<div className="r-btn">
							<h4>READ ARTICLE</h4>
							<img src={arrow}/>
						</div>
					</a>
				</figure>
				<figure>
					<a href=""><img src={blog}/></a>
					<figcaption>
						<div className="tag food">Food</div>
						<div className="tag movies">Movies</div>
					</figcaption>
					<a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
					<hr/>
					<a href="">
						<div className="r-btn">
							<h4>READ ARTICLE</h4>
							<img src={arrow}/>
						</div>
					</a>
				</figure>
				<figure>
					<a href=""><img src={blog}/></a>
					<figcaption>
						<div className="tag food">Food</div>
						<div className="tag movies">Movies</div>
					</figcaption>
					<a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
					<hr/>
					<a href="">
						<div className="r-btn">
							<h4>READ ARTICLE</h4>
							<img src={arrow}/>
						</div>
					</a>
				</figure>
			</div>
		</footer>
		</>
	);
}