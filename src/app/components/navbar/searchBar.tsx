import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBarContainer= styled.div`
width: 95%;
    ${
        tw`
            relative
            my-2
            md:w-1/3
        `
    }
`
const SearchInput= styled.input.attrs({type:"text", placeholder:"Tìm kiếm"})`
    ${
        tw`
            h-8
            w-full
            rounded-md
            text-black
            pl-2
        `
    }
`
const SearchButton = styled.button`
    ${
        tw`
            h-6
            w-8
            pl-2
            mt-1
            absolute
            right-2
            border
            border-transparent
            border-l-gray-400
        `
    }
`

const SearchBar = () => {
    return (
       <SearchBarContainer>
           <SearchInput />
           <SearchButton>
               <FontAwesomeIcon icon={faSearch} />
           </SearchButton>
       </SearchBarContainer>
    )
}

export default SearchBar
