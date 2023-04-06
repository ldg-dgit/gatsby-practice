import { Link, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.ProductsQuery>) {
  return (
    <Layout title='Welcome to basic shop 👋'>
      <div className='grid'>
        {data.allContentfulProduct.nodes.map((product) => (
          <article>
            <GatsbyImage image={getImage(product.preview?.gatsbyImageData!)!} alt={product.name!} />
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <h4>${product.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Products {
    allContentfulProduct {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title='Home' />;
