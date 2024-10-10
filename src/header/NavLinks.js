import React from "react";

// NavLinks.js
const links = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#projects', text: 'Projects' },
  { href: '#skills', text: 'Skills' },
  { href: '#contact', text: 'Contact' },
];
function NavLinks() {
  
    return (
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    );
  }
  
  export default NavLinks;
  