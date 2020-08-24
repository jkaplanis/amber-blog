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
  console.log(props.theme)
  return (
    <HeaderWrapper>
      <ImageWrapper>
        <img
          src="https://images.squarespace-cdn.com/content/v1/53ed0e3ce4b0c296acaeae80/1584577511464-8FDZYWQVXUI1OBS4VTZP/ke17ZwdGBToddI8pDm48kD8Xroq_AX5Zgi3HGn2a5gd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQQ0iLpUJJ55dW55w_oZ6JvHnXlmx4oSoNzVwlPskgpsLIXfY3DEqu8fc08UsQJ-4w/Bonneville14082-Edit-DHWEB%2BNick%2BFerguson%2BDenver%2BBroncos%2BHeadshot%2BPhotography%2Bby%2BAaron%2BLucy%2BDenver%2BColorado%2BHeadshots%2BPhotographer.jpg?format=2500w"
          alt="Amber Kaplanis Headshot"
        ></img>
      </ImageWrapper>
      <Content>
        <Heading>Amber Kaplanis</Heading>
        <p>
          Banh mi synth street art chambray food truck yuccie tumblr readymade
          organic roof party letterpress.
        </p>
      </Content>
    </HeaderWrapper>
  )
}

export default MeetTheBlogger
