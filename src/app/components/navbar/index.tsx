import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from './logo'
import Menu from './menu'
import SearchBar from './searchBar'

const NavBarContainer= styled.div`
    ${
        tw` w-full
            flex
            flex-col
            items-center
        `
    }
` 
const TopContainer = styled.div`
    ${
        tw`
        w-full
        flex 
        flex-col
        justify-around
        items-center
        md:flex-row
        md:justify-between
        px-2
        md:px-4
        py-2
        md:py-3
        `
    }
`

const NavBar = () => {
    return (
       <NavBarContainer>
           <TopContainer>
            <Logo />
            <SearchBar />
           </TopContainer>
           <Menu />
       </NavBarContainer>
    )
}

export default NavBar
