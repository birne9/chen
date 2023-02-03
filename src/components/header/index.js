import * as React from "react";
import "./index.css";
const Header = () => {
  return (
    <>
      <div class="header">
        <div class='left'>Birne9</div>
        <div class='right'>
          <div>About</div>
          <div>Blog</div>
          <div><a href="https://github.com/birne9" rel="noreferrer" target="_blank">Github</a></div>
          <div class='darkroom'> <a href="/darkroom" class='darkrooma'> Dark room </a></div>
        </div>
      </div>
    </>
  );
};
export default Header;
