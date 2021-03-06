import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import HeaderNav from '../components/HeaderNav';
import SEO from '../components/seo';
import '../components/home/home.css';
import './archive.css';

const Javascript = (props) => {

    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/category/javascript' : `/category/javascript/${currentPage - 1}`
    const nextPage = `/category/javascript/${currentPage + 1}`

    return (
        <Layout>
        <SEO title='Blog' keywords={['javascript', 'javascript blog']} />
        <Nav />
        <HeaderNav />

        <div className='feed'>
            {blogContent.edges.map(edge => (
                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`  
                }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
            >
            {edge.node.category.map(category => (
            <p className='card__category'>{category.category}</p>
            ))}
            <p className='card__title'>{edge.node.title}</p>
            </div>
            ))}
        </div>

        <div className='pagination'>
            <div className='pagination__item'>
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div className='arrow__back'></div>
                    </Link>
                )}
            </div>
            <div className='pagination__item'>
                {!isLast && (
                    <Link to={nextPage} rel='next'>
                        <div className='arrow__next'></div>
                    </Link>
                )}
            </div>
        </div>

        </Layout>
    )
}

export default Javascript

export const pageQuery = graphql` 
 query JavascriptQuery ($skip: Int!, $limit: Int!) {
   allContentfulBlog(
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
       category: {elemMatch: {title: {eq: "Javascript"}}}
    }
       skip: $skip
       limit: $limit
     ) {
     edges {
       node {
         id
         slug
         title
         createdAt
         category {
           title
           id
         }
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
 }
`
