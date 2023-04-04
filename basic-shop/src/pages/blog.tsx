import React from "react";
import Layout from "../components/Layout";

function Blog() {
  return (
    <Layout title='Blog'>
      <p>Latest News</p>
    </Layout>
  );
}

export default Blog;

export function Head() {
  return <title>Blog</title>;
}
