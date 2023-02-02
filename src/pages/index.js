import * as React from "react";
import Header from "../components/header";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main style={pageStyles}></main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>chen</title>;
