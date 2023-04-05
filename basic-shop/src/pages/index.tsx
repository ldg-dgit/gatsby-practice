import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title='Welcome to basic shop 👋'>
      <StaticImage
        height='500'
        src='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
      />
    </Layout>
  );
}

export const Head = () => <Seo title='Home' />;
