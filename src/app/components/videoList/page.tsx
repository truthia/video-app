import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { VIDEO } from '../../interface'
import ThumbNail from './thumbnail'

interface IProps{
    chunk:Array<VIDEO>
}

const PageContainer=styled.div`
    ${
        tw`
            grid
            grid-cols-2
            gap-2
            md:grid-cols-3
            lg:grid-cols-4
            w-full
        `
    }
`


const Page = (props:IProps) => {
    const {chunk}=props
   
    return (
        <PageContainer>
            {chunk.map((video,i)=>{
                return <ThumbNail 
                   
                    key={i}
                    title={video.title}
                    image={video.image}
                />
            })}
        </PageContainer>
    )
}

export default Page
