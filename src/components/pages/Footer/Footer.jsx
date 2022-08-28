import './Footer.css';
import React from "react";

const Footer = ()=>{
    return(
        <div>
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>About me</h4>
  	 			<ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Jobs</h4>
  	 			<ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Projects</h4>
  	 			<ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">my services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow me</h4>
  	 			<div class="social-links">
					
  	 				<a href="#">
					<i class="fab fa-facebook-f">
                    <img src="GitHub.png" width="40" height="40"></img>
					</i>
					</a>

  	 				<a href="#">
					<i class="fab fa-twitter">
					<img src="linkedin.png" width="40" height="40"></img>
					</i>
					</a>

  	 				<a href="#">
					<i class="fab fa-instagram">
					<img src="8-email.png" width="40" height="41"></img>
					</i>
					</a>
  	 				{/* <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
       
        </div>
    )
}
export default Footer;