import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout title='Welcome to basic shop 🤚'>
      <div></div>
    </Layout>
  );
}

export function Head() {
  return <title>basic shop</title>;
}
