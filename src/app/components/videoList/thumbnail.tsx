import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREEN } from '../../../responsive'
import { VIDEO } from '../../interface'

interface IProps extends VIDEO{
    onClick?:Function
} 

const ThumbnailContainer=styled.div`
    ${
        tw`
         w-full
         flex
         flex-col
         cursor-pointer
        `
    }
`
const ThumbnailImage=styled.div`
    width:100%;
    height: 30vw;
    object-fit: cover;
    img{
       height: 100%;
    }
    @media (min-width:${SCREEN.md}){
        height: 150px;
    }
`
const ThumbnailTitle=styled.p`
    ${
        tw`
         text-white
         text-center
        `
    }
`

const ThumbNail = (props:IProps) => {
    const {title,image,onClick}=props
    const navigate=useNavigate();
    const onCLickHandler=()=>{
        navigate("/watch",{replace:false})
    }
    return (
       <ThumbnailContainer  onClick={onCLickHandler}>
           <ThumbnailImage>
               <img src={image} alt="title" />
           </ThumbnailImage>
           <ThumbnailTitle>
               {title}
           </ThumbnailTitle>
       </ThumbnailContainer>
    )
}

export default ThumbNail
