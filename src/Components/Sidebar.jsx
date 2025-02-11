import React from 'react'
import { Box, Icon, Flex, Text, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useLocation } from 'react-router-dom';



const Sidebar = () => {
  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <Box width={'full'}>
    <Flex direction={['column']} gap={'5'} p={'2'}>
    <Box>
       <Link to={"/"}>

       <Flex alignItems={"center"} gap={'1'} fontSize={["xs", "md", "2xl"]} bg={pathname === "/" ? "rgba(128, 128, 128, 0.6)" : ""} borderRadius={"lg"} p={'0.5'}>
        <Icon as={MdOutlineDashboard} color={'blue'}></Icon>
        <Text>Dashboard</Text>
        </Flex>

       </Link>
      </Box>

      <Box>
        <Link to={"income"}>
        <Flex alignItems={"center"} gap={'1'} fontSize={["xs", "md", "2xl"]} bg={pathname === "/income" ? "rgba(128, 128, 128, 0.6)" : ""} borderRadius={"lg"} p={'0.5'}>
        <Icon as={CiWallet} color={'green'}></Icon>
        <Text>Income</Text>
        </Flex>
        </Link>
      </Box>

      <Box>
       <Link to={"expense"}>
       <Flex alignItems={"center"} gap={'1'} fontSize={["xs", "md", "2xl"]} bg={pathname === "/expense" ? "rgba(128, 128, 128, 0.6)" : ""} borderRadius={"lg"} p={'0.5'}>
       <Icon as={BiMoneyWithdraw} color={'red'}></Icon>
       <Text>Expenses</Text>
       </Flex>
       </Link>
      </Box>
    </Flex>
    </Box>
  )
}

export default Sidebar
