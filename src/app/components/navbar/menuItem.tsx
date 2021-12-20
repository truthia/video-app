import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IProps {
    text:string
}

const MenuItemContainer= styled.div`
    ${
        tw`
            bg-black
            border-4
            border-black
            text-white
            text-sm
            p-1.5
            px-2
            cursor-pointer
            select-none
            hover:text-gray-500
            transition-colors
        `
    };

`

const MenuItem = (props:IProps) => {
    const {text}= props
    return (
      <MenuItemContainer>
        {text}
      </MenuItemContainer>
    )
}

export default MenuItem
