import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog() {
  return (
    <Layout title='Blog'>
      <p>Latest News</p>
    </Layout>
  );
}

export default Blog;

export const Head = () => <Seo title='Blog' />;
