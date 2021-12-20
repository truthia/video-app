import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const FooterContainer = styled.div`
    ${
        tw`
            flex
            flex-row
            justify-center
            flex-wrap
            px-4
            pb-7
            w-full 
        `
    }
`
const FooterMenuContainer=styled.div`
    ${
        tw`
            flex
            flex-row
            flex-wrap
            justify-center
            text-sm
        `
    }
`
const CopyRightContainer= styled.div`
    ${
        tw`
            text-xs
            mt-1
            text-center
        `
    }
`
const RedText = styled.span`
    ${
        tw`
           text-red-600
           font-bold
           hover:text-red-800
           transition-colors
           cursor-pointer
           select-none
        `
    }
`
const WhiteText= styled.span`
    color:white;
`
const Vertical=styled.span`
width: 1px;
${
    tw`
    mt-1
    bg-white
    h-3
    mx-2
    `
}
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMenuContainer>
                <RedText>PHIM SEX</RedText>
                <Vertical />
                <RedText>JAV HD</RedText>
                <Vertical />
                <RedText>GÁI XINH</RedText>
                <Vertical />
                <RedText>KHÔNG CHE</RedText>
                <Vertical />
                <RedText>HIẾP DÂM</RedText>
                <Vertical />
                <RedText>LOẠN LUÂN</RedText>
                <Vertical />
                <RedText>VỤNG TRỘM</RedText>
                <Vertical />
                <RedText>CHÂU ÂU</RedText>
                <Vertical />
                <RedText>VIỆT SUB</RedText>
            </FooterMenuContainer>
            <CopyRightContainer>
                <WhiteText>
                    Copyright 2021 © <span> </span> 
                </WhiteText>
                <RedText>
                Phim Sex JAV - Phim Sex Gái Xinh Cực Hot <span> </span> 
                </RedText>
                <WhiteText>
                All rights reserved.
                </WhiteText>
                <span> </span> 
                <WhiteText>|</WhiteText>
                <span> </span> 
                <RedText>Sitemap</RedText>
                <span> </span> 
                <WhiteText>|</WhiteText>
                <span> </span> 
                <RedText>Jav</RedText>
            </CopyRightContainer>
        </FooterContainer>
    )
}

export default Footer
