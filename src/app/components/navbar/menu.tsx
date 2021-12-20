import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import MenuItem from './menuItem'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../../responsive'

const MenuContainer= styled.div`
    ${
        tw`
            w-full
            bg-gray-800
            md:bg-black
        `
    }
`
const MenuHeader= styled.button`
    width: 95%;
    ${
        tw`
            flex
            flex-row
            justify-between
            text-left
            ml-2
            mr-2
            my-2
        `
    }
`
const MenuHeadeText= styled.span
` ${
    tw`
        text-white
    `
}
`
const MenuHeadeIcon= styled.span
` ${
    tw`
        text-gray-100
    `
}
`

const MenuItemsContainer = styled.div<{hide?:boolean}>`

${
    tw`
        w-full
        grid
        grid-cols-2
        gap-y-0.5
        overflow-hidden
        font-semibold
        md:flex
        md:flex-row
        md:flex-wrap
    `
};
${({hide})=>!hide?
        tw`max-h-screen
        `:tw`max-h-0`};
 transition: max-height 0.5s;
`
const Menu = () => {
    const [hide, sethide] = useState(true)
    const menuListener=()=>sethide(!hide)
    const isMobile= useMediaQuery({maxWidth:SCREEN.md})
    if(isMobile)
    return (
       <MenuContainer>
           <MenuItemsContainer hide={hide}>
            <MenuItem text='PHIM SEX' />
            <MenuItem text='JAV HD' />
            <MenuItem text='GÁI XINH' />
            <MenuItem text='KHÔNG CHE' />
            <MenuItem text='HIẾP DÂM' />
            <MenuItem text='LOẠN LUÂN' />
            <MenuItem text='VỤNG TRỘM' />
            <MenuItem text='CHÂU ÂU' />
            <MenuItem text='VIỆT SUB' />
            <MenuItem text='' />
           </MenuItemsContainer>
           <MenuHeader onClick={menuListener}>
               <MenuHeadeText>Menu</MenuHeadeText>
               <MenuHeadeIcon>
                   {hide?
                   <FontAwesomeIcon icon={faChevronDown} />
                   :
                   <FontAwesomeIcon icon={faChevronUp} />
                }
               </MenuHeadeIcon>
           </MenuHeader>
       </MenuContainer>
    )
    else return(

        <MenuContainer>
            <MenuItemsContainer>
            <MenuItem text='PHIM SEX' />
            <MenuItem text='JAV HD' />
            <MenuItem text='GÁI XINH' />
            <MenuItem text='KHÔNG CHE' />
            <MenuItem text='HIẾP DÂM' />
            <MenuItem text='LOẠN LUÂN' />
            <MenuItem text='VỤNG TRỘM' />
            <MenuItem text='CHÂU ÂU' />
            <MenuItem text='VIỆT SUB' />
            <MenuItem text='' />
            </MenuItemsContainer>
        </MenuContainer>
    )
}

export default Menu
