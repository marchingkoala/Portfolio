import './App.css'

function App() {

  return (
    <>
      <div id="wrapper">
				{/* <!-- Intro --> */}
					<section className="intro">
						<header>
							<h1>Carmine Yijin Ro</h1>
							<p>Software engineer & Designer <a href="https://github.com/marchingkoala">@marchingkoala</a> / <a href="https://www.linkedin.com/in/carminero0921/">Linkedin</a></p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="images/pic01.jpg" alt="" /></span>
						</div>
					</section>

				{/* <!-- Section --> */}
					<section id="first">
						<header>
							<h2>About me</h2>
						</header>
						<div className="content">
							<p><strong>Hello World! </strong> My name is Carmine Yijin Ro and I'm software engineer specializing in the frontend development using PERN stack. I have been working in the fashion industry for 10+ years in various projects and positions. I'm transitioning into tech as I believe in making work process simpler using technology. </p>
							<span className="image main"><img src="images/fashionSoft-02.jpg" alt="" /></span>
						</div>
					</section>

				{/* <!-- Section --> */}
					<section>
						<header>
							<h2>Skills & Tools</h2>
						</header>
						<div className="content">
							<p><strong>I attended 7 months of Fullstack Academy's program </strong> 
							 where I gained hands on experience in both <strong>front-end </strong>and <strong>back-end</strong> development using various types of languages and technologies.</p>
							<ul className="feature-icons">
								<li className="icon solid fa-laptop">Javascript</li>
								<li className="icon solid fa-bolt">Python</li>
								<li className="icon solid fa-signal">TypeScript</li>
								<li className="icon solid fa-cog">React</li>
								<li className="icon solid fa-map-marker-alt">NodeJS</li>
								<li className="icon solid fa-code">PostgreSQL</li>
								<li className="icon solid fa-map-marker-alt">HTML</li>
								<li className="icon solid fa-code">CSS</li>
							</ul>
							<p>Through my bootcamp experience, I have learned the value of teamwork and collaboration while utilizing the <strong> Agile methodology.</strong> As a team player, I enjoy collaborating with others to achieve our goals.</p>
						</div>
					</section>

				{/* <!-- Section --> */}
					<section>
						<header>
							<h2>Fullstack Projects</h2>
						</header>
						<div className="content">
							<p><strong>During my time at bootcamp,</strong> I completed several fullstack web applications with my cohorts. <strong>My passion continued after graduation </strong>and I continued honing my skills building websites and doing pro-bono works.</p>

							{/* <!-- Section --> */}
								<section>
									<header>
										<h3>Click on images to open Github repo</h3>
										<p>Hover over the image to see its description and techs used!</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="https://github.com/marchingkoala/Doggle" className="landscape"><img src="images/gallery/thumbs/fuzzle_thumb-01.jpg" alt="thumbnail of a dog puzzle website featuring a very cute jindo dog and a mixed breed dog" /></a>
											<a href="https://github.com/marchingkoala/Portfolio"><img src="images/gallery/thumbs/personal_thumb-01.jpg" alt="" /></a>
											<a href="https://github.com/2208-Capstone-Team-1/Capstone-Kitchen-Prep"><img src="images/gallery/thumbs/chefs_thumbnail-01.jpg" alt="" /></a>
											<a href="https://github.com/2208-GS-Team-1/Comic-Overflow" className="landscape"><img src="images/gallery/thumbs/comic_thumbnail-01.jpg" alt="" /></a>
										</div>
									</div>
								</section>

							{/* <!-- Section --> */}
								<section>
									<header>
										<h3>UI Design</h3>
										<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="images/gallery/fulls/05.jpg" className="landscape"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
											<a href="images/gallery/fulls/06.jpg"><img src="images/gallery/thumbs/06.jpg" alt="" /></a>
											<a href="images/gallery/fulls/07.jpg"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
										</div>
									</div>
								</section>

							{/* <!-- Section --> */}
								<section>
									<header>
										<h3>Lorem gravida</h3>
										<p>Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore.  ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="images/gallery/fulls/08.jpg" className="portrait"><img src="images/gallery/thumbs/08.jpg" alt="" /></a>
											<a href="images/gallery/fulls/09.jpg" className="portrait"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
											<a href="images/gallery/fulls/10.jpg" className="landscape"><img src="images/gallery/thumbs/10.jpg" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
					</section>

				{/* <!-- Section --> */}
					<section>
						<header>
							<h2>Duis sed adpiscing veroeros amet</h2>
						</header>
						<div className="content">
							<p><strong>Proin tempus feugiat</strong> sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
							<ul className="actions">
								<li><a href="#" className="button primary large">Get Started</a></li>
								<li><a href="#" className="button large">Learn More</a></li>
							</ul>
						</div>
					</section>

          {/* <!-- Section --> */}
					<section>
						<header>
							<h2>Get in touch</h2>
						</header>
						<div className="content">
							<p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
							<form>
								<div className="fields">
									<div className="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div className="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div className="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="button primary" /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul className="items">
								<li>
									<h3>Email</h3>
									<a href="#">information@untitled.ext</a>
								</li>
								<li>
									<h3>Phone</h3>
									<a href="#">(000) 000-0000</a>
								</li>
								<li>
									<h3>Address</h3>
									<span>1234 Somewhere Road, Nashville, TN 00000</span>
								</li>
								<li>
									<h3>Elsewhere</h3>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
										<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
										<li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
										<li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
										<li><a href="#" className="icon brands fa-codepen"><span className="label">Codepen</span></a></li>
									</ul>
								</li>
							</ul>
						</footer>
					</section>

				{/* <!-- Copyright --> */}
					<div className="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>
    </div>
    </>
  )
}

export default App
