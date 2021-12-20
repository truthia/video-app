import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

interface IProps {
    lastPage: number
    setPage:React.Dispatch<React.SetStateAction<number>>,
    parrentPage:number
}

const PageNavContainer = styled.div`
    ${
        tw`
            w-full
            flex
            flex-row
            flex-wrap
            items-center
            justify-center
            mt-1 pt-1
        `
    }
`

const PageNavButton = styled.button<{disabled?:boolean}>`
    ${
        tw`
            mx-1
            my-0.5
            py-2
            px-2
            text-white
            rounded-sm
        `
    };
    ${({disabled})=>disabled?tw`bg-gray-500`:tw`bg-gray-800`}
`

const PageNavigation = (props:IProps) => {
    const {lastPage,setPage,parrentPage}=props

    const [currentPage, setcurrentPage] = useState<number>(1)
    useEffect(()=>{
      setPage(currentPage)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },[currentPage])
   
    useEffect(() => {
      if(parrentPage>0&&parrentPage<=lastPage&&parrentPage!==currentPage)
      {
        setcurrentPage(parrentPage)
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    }, [parrentPage])

    if(currentPage===1)
    return (
      <PageNavContainer>
          <PageNavButton >
            Page {currentPage} of {lastPage}
          </PageNavButton>
          <PageNavButton disabled>
           1
          </PageNavButton>
          {lastPage>1&&
          <PageNavButton onClick={()=>setcurrentPage(2)} >
           2
          </PageNavButton>
            }
          {lastPage>2&&
          <PageNavButton onClick={()=>setcurrentPage(3)}>
           3
          </PageNavButton>
            }
          {lastPage>3&&
          <PageNavButton onClick={()=>setcurrentPage(4)}>
           4
          </PageNavButton>
            }
           {lastPage>4&&
          <PageNavButton onClick={()=>setcurrentPage(5)}>
           5
          </PageNavButton>
            }
          {lastPage>5&&
          <PageNavButton>
           ...
          </PageNavButton>
            }
          <PageNavButton onClick={()=>setcurrentPage(currentPage+1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </PageNavButton>
          <PageNavButton onClick={()=>setcurrentPage(lastPage)}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </PageNavButton>
      </PageNavContainer>
    )
    else if(currentPage===2){
        return (
            <PageNavContainer>
                <PageNavButton>
                  Page {currentPage} of {lastPage}
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(1)}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(currentPage-1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(1)}>
                 1
                </PageNavButton>
                {lastPage>1&&
                <PageNavButton disabled>
                 2
                </PageNavButton>
                  }
                {lastPage>2&&
                <PageNavButton onClick={()=>setcurrentPage(3)}>
                 3
                </PageNavButton>
                  }
                {lastPage>3&&
                <PageNavButton onClick={()=>setcurrentPage(4)}>
                 4
                </PageNavButton>
                  }
                 {lastPage>4&&
                <PageNavButton onClick={()=>setcurrentPage(5)}>
                 5
                </PageNavButton>
                  }
                {lastPage>5&&
                <PageNavButton>
                 ...
                </PageNavButton>
                  }
                <PageNavButton onClick={()=>setcurrentPage(currentPage+1)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(lastPage)}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </PageNavButton>
            </PageNavContainer>
            )
        }
        else if(currentPage===lastPage-1&&lastPage>3){
            return (
                <PageNavContainer>
                    <PageNavButton>
                      Page {currentPage} of {lastPage}
                    </PageNavButton>
                    <PageNavButton onClick={()=>setcurrentPage(1)}>
                      <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </PageNavButton>
                    <PageNavButton onClick={()=>setcurrentPage(currentPage-1)}>
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </PageNavButton>
                    {lastPage-5>0&&
                    <PageNavButton>
                     ...
                    </PageNavButton>
                      }
                      {lastPage>4&&
                    <PageNavButton onClick={()=>setcurrentPage(lastPage-4)}>
                     {lastPage-4}
                    </PageNavButton> }
                    {lastPage>3&&
                    <PageNavButton onClick={()=>setcurrentPage(lastPage-3)}>
                     {lastPage-3}
                    </PageNavButton>
                      }
                    {lastPage>2&&
                    <PageNavButton onClick={()=>setcurrentPage(lastPage-2)}>
                     {lastPage-2}
                    </PageNavButton>
                      }
                    {lastPage>1&&
                    <PageNavButton disabled>
                     {lastPage-1}
                    </PageNavButton>
                      }
                    <PageNavButton onClick={()=>setcurrentPage(lastPage)}>
                     {lastPage}
                    </PageNavButton>
                    <PageNavButton onClick={()=>setcurrentPage(currentPage+1)}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </PageNavButton>
                    <PageNavButton onClick={()=>setcurrentPage(lastPage)}>
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </PageNavButton>
                </PageNavContainer>
              )
    }
    else if(currentPage===lastPage&&lastPage>3){
        return (
            <PageNavContainer>
                <PageNavButton>
                  Page {currentPage} of {lastPage}
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(1)}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </PageNavButton>
                <PageNavButton onClick={()=>setcurrentPage(currentPage-1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </PageNavButton>
                {lastPage-5>0&&
                <PageNavButton>
                 ...
                </PageNavButton>
                  }
                  {lastPage>4&&
                <PageNavButton onClick={()=>setcurrentPage(lastPage-4)}>
                 {lastPage-4}
                </PageNavButton> }
                {lastPage>3&&
                <PageNavButton onClick={()=>setcurrentPage(lastPage-3)}>
                 {lastPage-3}
                </PageNavButton>
                  }
                {lastPage>2&&
                <PageNavButton onClick={()=>setcurrentPage(lastPage-2)}>
                 {lastPage-2}
                </PageNavButton>
                  }
                {lastPage>1&&
                <PageNavButton onClick={()=>setcurrentPage(lastPage-1)}>
                 {lastPage-1}
                </PageNavButton>
                  }
                <PageNavButton disabled>
                 {lastPage}
                </PageNavButton>
            </PageNavContainer>
          )
}
        else{
            return(
            <PageNavContainer>
            <PageNavButton>
              Page {currentPage} of {lastPage}
            </PageNavButton>
            <PageNavButton onClick={()=>setcurrentPage(1)}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </PageNavButton>
            <PageNavButton onClick={()=>setcurrentPage(currentPage-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </PageNavButton>
            {currentPage-3>0&&
            <PageNavButton>
             ...
            </PageNavButton>
              }
              {currentPage>2&&
            <PageNavButton onClick={()=>setcurrentPage(currentPage-2)}>
             {currentPage-2}
            </PageNavButton> }
            {currentPage>1&&
            <PageNavButton onClick={()=>setcurrentPage(currentPage-1)} >
             {currentPage-1}
            </PageNavButton>
              }
            <PageNavButton disabled>
             {currentPage}
            </PageNavButton>
            {lastPage>currentPage&&
            <PageNavButton onClick={()=>setcurrentPage(currentPage+1)}>
             {currentPage+1}
            </PageNavButton>
              }{lastPage-1>currentPage&&
            <PageNavButton onClick={()=>setcurrentPage(currentPage+2)}>
             {currentPage+2}
            </PageNavButton>
        }
              {lastPage-2>currentPage&&
            <PageNavButton>
             ...
            </PageNavButton>
              }
            <PageNavButton onClick={()=>setcurrentPage(currentPage+1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </PageNavButton>
            <PageNavButton onClick={()=>setcurrentPage(lastPage)}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </PageNavButton>
        </PageNavContainer>
        )
        }
}

export default PageNavigation
