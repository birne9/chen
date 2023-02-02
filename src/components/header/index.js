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
          <div>Github</div>
          <div class='darkroom'> <a href="/darkroom"> Dark room </a></div>
        </div>
      </div>
    </>
  );
};
export default Header;
