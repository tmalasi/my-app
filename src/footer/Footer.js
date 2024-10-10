import React from "react";
import NavLinks from "../header/NavLinks"

const socialLinks = [
    { href: 'https://github.com/tmalasi', iconClass: 'bi bi-github' },
    { href: 'https://discord.com/users/_tuci', iconClass: 'bi bi-discord' },
    { href: 'https://www.linkedin.com/in/tea-malasi-1802a0257/', iconClass: 'bi bi-linkedin' },
    { href: 'https://www.instagram.com', iconClass: 'bi bi-instagram' },
];
function Footer (){
    return(
        <footer className="footer">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase">About Me</h5>
            <p>
              I am a passionate software engineer with a focus on web development who also enjoys gaming. This portfolio showcases my projects and skills.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <NavLinks />
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase">Connect with Me</h5>
                        <div className="social-media">
                            {socialLinks.map((link, index) => (
                                <a href={link.href} target="_blank" key={index} className="social-icon">
                                    <i className={link.iconClass}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
        <div className="text-center">
          <div className="copyright">
            &copy; <span id="spanYear"></span> Tea Malasi. All Rights Reserved.
          </div>
        </div>
      </div>
        </footer>
    )
}
export default Footer;