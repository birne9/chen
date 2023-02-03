import * as React from "react";
import Header from "../components/header";

const pageStyles = {
  color: "#bbb",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width:'1024px',
  margin:'0 auto',
  boxSizing:'border-box',
  padding:'100px 0px'
};

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main style={pageStyles}>
        <div>
          <div>HI, I'm Birne9, a Front-end developer</div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Birne9</title>;
