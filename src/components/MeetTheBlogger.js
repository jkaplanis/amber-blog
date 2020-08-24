import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 3fr;
  grid-template-rows: auto;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr;
  }
`

const ImageWrapper = styled.div`
  margin-right: 15px;
`

const Heading = styled.h1`
  margin-left: 15px;
  display: block;
  margin: 2px 0 0 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const MeetTheBlogger = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogger {
        edges {
          node {
            bloggerImage {
              file {
                url
              }
              title
            }
            bloggerTagline {
              content {
                content {
                  value
                }
              }
            }
            bloggerName
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper>
      <ImageWrapper>
        <img
          src={data.allContentfulBlogger.edges[0].node.bloggerImage.file.url}
          alt={data.allContentfulBlogger.edges[0].node.bloggerImage.file.title}
        ></img>
      </ImageWrapper>
      <Content>
        <Heading>{data.allContentfulBlogger.edges[0].node.bloggerName}</Heading>
        <p>
          {
            data.allContentfulBlogger.edges[0].node.bloggerTagline.content[0]
              .content[0].value
          }
        </p>
      </Content>
    </HeaderWrapper>
  )
}

export default MeetTheBlogger
