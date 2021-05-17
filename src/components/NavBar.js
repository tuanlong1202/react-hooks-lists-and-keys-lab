import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const pre = "#";

  return (
    <nav>
      <a href={pre+links[0]}>Home</a>
      <a href={pre+links[1]}>About</a>
      <a href={pre+links[2]}>Projects</a>
    </nav>
  );
}

export default NavBar;
