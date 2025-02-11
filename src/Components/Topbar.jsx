import React from 'react'
import { Box, Flex, Text, Stack, Icon, space} from '@chakra-ui/react'
import { CiLight } from "react-icons/ci";
import { useState } from 'react';
import { ContextTheme } from './ThemeContext';
import { useContext } from 'react';


const Topbar = () => {
  const {light, handleToggle} = useContext(ContextTheme)

 return (
    <Box>
      <Flex width={""} alignItems={'center'} justify={"space-between"}>
      <Box as='b' color={'white'} fontSize={["2xl", "3xl", "4xl"]}>Xpense<Text as={"b"} color={"#2F8726"}>TRACKER</Text></Box>

      <Stack direction={['column']} fontSize={["2xl", "3xl", "4xl"]}>
      <Icon as={CiLight} color={light ? 'gold' : 'white'} cursor={'pointer'} onClick={handleToggle}></Icon>
      </Stack>

      </Flex>
    </Box>
  )
}

export default Topbar
