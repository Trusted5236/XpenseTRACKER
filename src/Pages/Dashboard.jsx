import React from 'react'
import { useContext } from 'react'
import { contextData } from '../Components/Context'
import { Box, Text, Flex, Spinner } from '@chakra-ui/react'
import BoxCont from '../Components/BoxCont'
import { BiMoneyWithdraw } from "react-icons/bi";
import LineChart from '../Components/LineChart'
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoTrendingDownOutline } from "react-icons/io5";
import { MdTrendingFlat } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";


const Dashboard = () => {
const {posts, isLoading, isError} = useContext(contextData)


  return (
    <Box>
       <Flex direction={["column"]} gap={'2rem'}>
       <Text fontSize={'2xl'} fontWeight={'bold'}>Dashboard</Text>

        <Flex alignItems={'center'} wrap={'wrap'} justify={["center", 'space-between', 'space-between']} gap={'4'}>
<BoxCont
 icon={GiMoneyStack}
 text={"Revenue"}
 figure={`$${isLoading ? <Spinner/> : posts.reduce((acc, value)=>{return acc + value.revenue}, 0
)}`}
trend={MdTrendingFlat}
 />

 <BoxCont
 icon={BiMoneyWithdraw }
 text={"Expense"}
 figure={`$${isLoading ? <Spinner/> : posts.reduce((acc, value)=>{return acc + value.expenses}, 0
)}`}
trend={IoTrendingDownOutline}
 />

 <BoxCont
 icon={CiWallet}
 text={"Profits"}
 figure={`$${isLoading ?  <Spinner/>  : posts.reduce((acc, value)=>{return acc + value.profit}, 0
)}`}
trend={IoTrendingUpOutline}
 />
        </Flex>

        <LineChart/>
       {/* <Box>
        <Flex>
        <PieChart/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam dignissimos, beatae expedita, natus rerum omnis explicabo aspernatur officiis, facilis minima. Pariatur, reiciendis. Veniam, quod minima similique magnam et officia.
        </Flex>
       </Box> */}
        </Flex>
        </Box>
  )
}

export default Dashboard
