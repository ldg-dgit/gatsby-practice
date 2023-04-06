import React from "react";
import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulProduct?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulProduct?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulProduct?.name!} />
      <h2>${data.contentfulProduct?.price}</h2>
    </Layout>
  );
}

export const data = graphql`
  query Product($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(placeholder: BLURRED, height: 250)
      }
    }
  }
`;
