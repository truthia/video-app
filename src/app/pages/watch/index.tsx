import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DATA } from '../../components/videoList/dummyData'
import ThumbNail from '../../components/videoList/thumbnail'

const WatchContainer= styled.div`
     min-height: 100vh;
    ${
        tw`
            w-full
            md:px-2
        `
    }
`

const VideoContainer= styled.div`
    ${
        tw`
        px-2
        `
    };
    iframe{
        width: 100%;
        height: 50vw;
    }
`
const RecContainer= styled.div`
    ${
        tw`
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            md:grid-cols-4
            w-full
        `
    }
`
const VideoTitle= styled.p`
    ${
        tw`
            text-2xl
            text-white
            my-4
        `
    }
`
const Spliter=styled.div`
    ${
        tw`bg-gray-800
        h-0.5
        w-full
        my-4
        `
    }
`

const Watch = () => {
    const [Data, setData] = useState(DATA.slice(0,8))

    return (
       <WatchContainer>
           <VideoContainer>
            <VideoTitle>
                What are you watching?
            </VideoTitle>
            <Spliter />
            <iframe  src="https://short.ink/HuHduPD9wn" frameBorder="0" scrolling="0" allowFullScreen></iframe>
           </VideoContainer>
           <Spliter />
           <h3 className='text-white text-xl ml-2'>Video liên quan</h3>
           <Spliter />
           <RecContainer>
            {Data.map((video,i)=>{
                    return <ThumbNail key={i}
                        title={video.title}
                        image={video.image}
                    />
            })}
           </RecContainer>
       </WatchContainer>
    )
}

export default Watch
