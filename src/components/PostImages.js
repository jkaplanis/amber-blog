import React from 'react'
import styled from '@emotion/styled'

const ImagesWrapper = styled.div`
display: grid;
grid-template-columns: minmax
grid-template-rows: auto;
@media screen and (max-width: ${props => props.theme.responsive.small}) {
  grid-template-columns: 1fr;
}
`

const PostImages = () => {

  return (

  )
}

export default PostImages;