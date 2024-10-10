import React from "react";
import NavLinks from "./NavLinks";
import logo from "../image/tea-logo.png";

function Header() {
  return (
    <header style={{display: "flex",  backgroundColor: "white",width: "100%", zIndex: "1000"}}>
          <div class="logo">
        <img src={logo} alt="Logo" />
      </div>
    <button className="icon-hamburger"> &#9776;</button>
      <nav id="navbar" style={{ display: "flex" }}>
        <NavLinks />
      </nav>
</header>
  );
}
export default Header;
