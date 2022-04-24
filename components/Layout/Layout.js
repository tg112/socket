import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import nProgress from "nprogress";
import Router from "next/router";

function Layout({ children }) {
  Router.onRouterChangeStart = () => nProgress.start();
  Router.onRouterChangeComplete = () => nProgress.done();
  Router.onRouterChangeError = () => nProgress.done();
  return (
    <>
      <HeadTags />

      <Navbar />

      <Container style={{ paddingTop: "1rem" }} text>
        {children}
      </Container>
    </>
  );
}

export default Layout;
