import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREEN } from '../../../responsive'

const LogoContainer= styled.div`
    ${
        tw`
            w-full
            flex
            flex-col
            items-center
            pt-2
            pb-2
            cursor-pointer
            md:w-auto
        `
    }
`
const LogoImage=styled.div`
img{
    height: 1.5em;
    width: auto;
    @media (min-width:${SCREEN.md}){
        height: 2em;
    }
    @media (min-width:${SCREEN.lg}){
        height: 2.5em;
    }
}
`
const Logo = () => {
    const navigate = useNavigate()
    return (
       <LogoContainer onClick={()=>navigate("/")}>
           <LogoImage>
               <img src="https://coisex.me/wp-content/uploads/2021/06/logovip.png" alt="logo" />
           </LogoImage>
       </LogoContainer>
    )
}

export default Logo
