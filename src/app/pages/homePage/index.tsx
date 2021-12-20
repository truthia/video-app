import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import VideoList from '../../components/videoList'

const PageContainer=styled.div`
    min-height: 100vh;
    ${
        tw`
            w-full
            md:px-2
        `
    }
`
const HomePage = () => {
    return (
       <PageContainer>
          <VideoList />
       </PageContainer>
    )
}

export default HomePage
