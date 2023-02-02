import * as React from "react";
import "../static/darkroom.css";
const darkroom = {
  display: "flex",
  justifyContent: "space-around",
};
const DarkRoom = () => {
  return (
    <>
      <div class="darkrooms">
        <div style={darkroom}>
          <div class="box"></div>
          <div class="box"></div>
        </div>
        <div class="inner">陈鑫臭傻逼</div>
      </div>
    </>
  );
};

export default DarkRoom;
export const Head = () => <title>陈鑫臭傻逼</title>;
