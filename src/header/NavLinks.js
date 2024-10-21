import React from "react";
import { Link } from "react-router-dom";

const links = [
  { href: '/', text: 'Home' },
  { href: '/dashboard/about', text: 'About' },
  { href: '/dashboard/projects', text: 'Projects' },
  { href: '/dashboard/contact', text: 'Contact' },
  { href: '/dashboard/calendar', text: 'Calendar' },
];

function NavLinks() {
  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
