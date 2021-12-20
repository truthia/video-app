import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Footer from './app/components/footer';
import NavBar from './app/components/navbar';
import HomePage from './app/pages/homePage';
import Watch from './app/pages/watch';

const AppContainer = styled.div`
    background-color: #1b1b1b;
  ${
    tw`
      w-full
      md:max-w-screen-md
      lg:max-w-screen-lg
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

function App() {
  return (
    <div className='bg-gray-800 flex flex-row justify-center'>
        <AppContainer>
       <NavBar />
       <Routes>
         <Route path="video-app/" element={<HomePage />} />
         <Route path="video-app/watch" element={<Watch />} />
       </Routes>
       <Spliter />  
       <Footer />
    </AppContainer>
    </div>
 
  );
}

export default App;
