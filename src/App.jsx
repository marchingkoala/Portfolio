import { useState } from 'react';
import './App.css'
import resume from '/resume/Carmine_Yijin_Ro_Resume.pdf'
import { useForm, ValidationError } from "@formspree/react";

function App() {

	//handle resume download
	const downLoad = (e) =>{
		e.preventDefault();
		const link = document.createElement('a');
		link.href = resume;
		link.download = 'Carmine_Yijin_Ro_Resume.pdf';
		link.click();
	}

	//handle email form submission
	const [state, handleSubmit] = useForm("mjvqajnn");

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
							<span className="image fill" data-position="center"><img src="images/profile-01.jpg" alt="" /></span>
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
											<a href="https://github.com/marchingkoala/Doggle" className="landscape">
												<img src="images/gallery/thumbs/fuzzle_thumb-01.jpg" alt="thumbnail of a dog puzzle website" />
												<div className='content fade'>
													<div className='content_title'>Fuzzle</div><br />
													Breed DNA quiz app created with 50+ user survey to conquer breed biases and promote adoption.<br />
													Javascript, HTML, CSS, React JS, PostgreSQL, Express REST API, Node JS, Git
												</div>
											</a>
											<a href="https://github.com/marchingkoala/Portfolio">
												<img src="images/gallery/thumbs/personal_thumb-01.jpg" alt="" />
												<div className='content fade'>
													<div className='content_title'>Portolio Website</div><br />
													Responsive website featuring my portfolio<br />
													Javascript, HTML, CSS, VITE React, Git
												</div>
											</a>
											<a href="https://github.com/2208-Capstone-Team-1/Capstone-Kitchen-Prep">
												<img src="images/gallery/thumbs/chefs_thumbnail-01.jpg" alt="" />
												<div className='content fade'>
													<div className='content_title'>Chef's Kiss</div><br />
													Alexa integrated kitchen helper app<br />
													Typescript, HTML, CSS, React, PostgreSQL, Express, AWS Lambda, Firebase, Git
												</div>
											</a>
											<a href="https://github.com/2208-GS-Team-1/Comic-Overflow" className="landscape">
												<img src="images/gallery/thumbs/comic_thumbnail-01.jpg" alt="" />
												<div className='content fade'>
													<div className='content_title'>Comic Overflow</div><br />
													E-commerce website for comic shop<br />
													Javascript, HTML, CSS, Material UI, React, Redux, PostgreSQL, Express, AWS Lambda, Firebase, Git
												</div>
											</a>
										</div>
									</div>
								</section>

							{/* <!-- Section --> */}
								<section>
									<header>
										<h3>UI Design</h3>
										<p>I have begun designing web application mock-ups for non-profit organizations and local businesses using tools like Figma, Adobe Illustrator, and Adobe Photoshop, complemented by my keen sense of design. It has been incredibly rewarding to apply both my design expertise and recently acquired coding skills for the greater good while assisting small businesses.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="https://www.figma.com/file/qemiE8hqRv4WZgXmQGBjJS/Husdon-River-Sloop-Clearwater-Design?type=design&mode=design&t=qwGpHFBGSx4NJrWO-1" className="landscape"><img src="images/gallery/thumbs/pro-bono-01.jpg" alt="thumbnail of a ui mock up of non profit org" /></a>
											<a href="https://www.figma.com/file/BDirLoJiO2RItCyEpQ1M4B/ROSA's-K9-Training?type=design&mode=design&t=qwGpHFBGSx4NJrWO-1"><img src="images/gallery/thumbs/rosa-thumb-01.jpg" alt="thumbnail of a ui mock up for a canine training website" /></a>
											<a href="images/gallery/fulls/07.jpg"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
										</div>
									</div>
								</section>

							{/* <!-- Section --> */}
								<section>
									<header>
										<h3>Fashion Design</h3>
										<p>My experience in the world of mass market design and vendor/buyer relations has taught me how to anticipate how people might think about and interact with products. I am excited to bring this perspective to software engineering, where understanding user experience is essential to creating intuitive and effective digital products.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="https://www.amazon.com/Dresses-Lark-Ro-Clothing/s?rh=n%3A1045024%2Cp_89%3ALark+%26+Ro" className="portrait"><img src="images/gallery/thumbs/lark_thumbnail-01.jpg" alt="" /></a>
											<a href="https://corporate.target.com/article/2017/03/victoria-beckham-look-book" className="portrait"><img src="images/gallery/thumbs/beckam_thumb-01.jpg" alt="" /></a>
											<a href="https://fashionista.com/2017/03/victoria-beckham-target-collection-prices" className="landscape"><img src="images/gallery/thumbs/group_thumb-01.jpg" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
					</section>

				{/* <!-- Section --> */}
					<section>
						<header>
							<h2>Learn More</h2>
						</header>
						<div className="content">
							<p><strong>Interested in seeing more?</strong> Click on below to download my resume and explore my Github Repo.</p>
							<ul className="actions">
								<li><a href={resume} download={"Carmine_Yijin_Ro_Resume.pdf"} onClick={downLoad} className="button primary large">Download Resume</a></li>
								<li><a href="https://github.com/marchingkoala" className="button large">Github</a></li>
							</ul>
						</div>
					</section>

          {/* <!-- Section --> */}
					<section>
						<header>
							<h2>Get in touch</h2>
						</header>
						<div className="content">
							<p><strong>Work with me!</strong> I'm excited to bring my experience as a client facing designer into software engineering. I am looking for an opportunity to learn and grow!</p>
							<form onClick={handleSubmit}>
								<div className="fields">
									<div className="field half">
										<input type="text" name="name" id="name" placeholder="Name"  />
										<ValidationError prefix="Name" field="name" errors={state.errors} />
									</div>
									<div className="field half">
										<input type="email" name="email" id="email" placeholder="Email"  />
										<ValidationError prefix="Email" field="email" errors={state.errors} />
									</div>
									<div className="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"  />
										<ValidationError prefix="Message" field="message" errors={state.errors} />
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="button primary" disabled={state.submitting} /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul className="items">
								<li>
									<h3>Email</h3>
									<a href="#">yri.carmine@gmail.com</a>
								</li>
								<li>
									<h3>Location</h3>
									<span>New York, NY</span>
								</li>
								<li>
									<h3>Elsewhere</h3>
									<ul className="icons">
										<li><a href="https://github.com/marchingkoala" className="icon" style={{marginRight: "10px"}}><img src="images/github.png" width="45px" height="auto" /></a></li>
										<li><a href="https://www.linkedin.com/in/carminero0921/" className="icon" style={{marginRight: "10px"}}><img src="images/linkedin.png" width="45px" height="auto" /></a></li>
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
