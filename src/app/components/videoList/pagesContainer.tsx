import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { VIDEO } from '../../interface'

import {DATA} from "./dummyData"
import Page from './page'
import PageNavigation from './pageNavigation'

const Container=styled.div`
    ${tw`
        w-full
       
    `}
`
const PageInputContainer=styled.div`
  ${
    tw`
      flex
      flex-row
      justify-center
      mx-3
    `
  }
`
const PageInput=styled.input.attrs({type:"number"})`  ${
      tw`
        w-full
        rounded-l-md
        h-8
        pl-2
      `
    }
`
const InputButton=styled.button`
  ${
    tw`
      w-14
      bg-gray-800
      text-white
      rounded-r-md
      h-8
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

const PagesContainer = () => {
    const inputRef = useRef<HTMLFormElement>(null)
    const [Data, setData] = useState(DATA)
    const [pages, setpages] = useState<VIDEO[][]>([])
    const [CurrentPageNumber, setCurrentPageNumber] = useState(1)
    const [Input, setInput] = useState<number>(1)
    const splitData= ()=>{
        for(let i=0;i<Data.length;i+=16){
            let temp=Data.slice(i,i+16)
            setpages((oldPages)=>[...oldPages,temp])
          
        }
    }
    const inputHandler = ()=>{
    if(inputRef.current!==null){
        
        setInput(parseInt(inputRef.current["topage"].value))
        inputRef.current["topage"].value=""
    }
    }

   useEffect(()=>{
    splitData()
   },[])
   
    return (
    <Container>
      
       {
           pages.length>=1?<Page chunk={pages[CurrentPageNumber-1]} />:<p>Loading</p>
       }
       <Spliter />
        <PageInputContainer>
            <form ref={inputRef} onSubmit={e=> e.preventDefault()}>
                <PageInput name="topage"  />
            </form>
            <InputButton onClick={inputHandler} >Go</InputButton>
        </PageInputContainer>
       <PageNavigation parrentPage={Input} setPage={setCurrentPageNumber} lastPage={pages.length} />
       
    </Container>
    )
}

export default PagesContainer
