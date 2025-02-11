import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextTheme } from '../Components/ThemeContext'


const RootLayout = () => {

  const {light} = useContext(ContextTheme)
  
  return (
    <Box>
      <Box as='header' width={"100%"} bg={'black'} p={2} borderBottom={'1px'} borderColor={'grey'}>
        <Topbar/>
      </Box>

      <Flex>
        <Box bg={light ? 'white' : 'black'} color={light ? 'black' : 'white'} w={["23%", "20%", "15%"]} h={"100vh"} borderRight={'1px'} borderColor={'grey'} position={'sticky'} left={'0'} top={'0'} overflow={'auto'}>
          <Sidebar/>
        </Box>

        <Box bg={light ? 'white' : 'black'} color={light ? 'black' : 'white'} p={"2"} w={["77%", "80%", "85%"]}>
          <Outlet/>
        </Box>
      </Flex>

    </Box>
  )
}

export default RootLayout
