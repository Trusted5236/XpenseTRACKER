import React from 'react'
import { useContext } from 'react'
import { contextData } from '../Components/Context'
import { Text, Flex, Box, List, ListIcon, ListItem  } from '@chakra-ui/react'
import PieChart from '../Components/PieChart'
import { FaCheckCircle } from "react-icons/fa";


const Expense = () => {
  const {posts} = useContext(contextData)
  
  
    const aggregateData = (data) =>{
      const monthlyData = {}
    
      data.forEach((entry)=>{
          const date = new Date(entry.date)
          const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`
    
          if(!monthlyData[monthYear]){
              monthlyData[monthYear]={
                  month : date.toLocaleDateString("default", {month:"long", year:"numeric"}),
                  revenue:0,
                  expenses:0,
                  profit:0,
                  customer_count:0
              }
          }
    
          monthlyData[monthYear].revenue += entry.revenue
          monthlyData[monthYear].expenses += entry.expenses
          monthlyData[monthYear].profit += entry.profit
          monthlyData[monthYear].customer_count += entry.customer_count
         
      })
        return Object.values(monthlyData)
    }

    const monthlyData = aggregateData(posts)

    const maxExpense = Math.max(...monthlyData.map((item)=> item.expenses))

    const maxExpenseMonth = monthlyData.find((item)=>item.expenses === maxExpense)?.month
  
    const mostCustomers = Math.max(...monthlyData.map((item)=>item.customer_count))
  
    const mostCustomersMonth = monthlyData.find((item)=>item.customer_count === mostCustomers)?.month
  
  
    const minExpense = Math.min(...monthlyData.map((item)=> item.expenses))
  
    const minExpenseMonth = monthlyData.find((item)=>item.expenses === minExpense)?.month
  
  
    const maxRevenue = Math.max(...monthlyData.map((item)=> item.revenue))
  
    const minRevenue = Math.min(...monthlyData.map((item)=> item.revenue))
    
  
    const maxRevenueMonth = monthlyData.find((item)=>item.revenue === maxRevenue)?.month
  
    const minRevenueMonth = monthlyData.find((item)=>item.revenue === minRevenue)?.month

  return (
    <Box >
      <Text fontSize={'2xl'} fontWeight={'bold'} pb={'4'}>Expense</Text>

      <Flex direction={["column", "column", "row"]} alignItems={["center","center", "center"]} gap={'4'} justifyContent={["center", "center", "space-between"]} borderRadius={'lg'} border={'1px'} borderColor={'grey'}  p={'2'}>
        <Box w={["100%", "100%", "100%"]}><PieChart/></Box>

       <Flex  w={["100%", "100%", "100%"]} direction={["column"]} gap={'4'}>
       <Text>Lucy Coffee Store experienced a dynamic year in 2024, with fluctuations in revenue, and profit margins. The store served a total of <strong>{posts.reduce((acc, value)=>{return acc + value.customer_count}, 0)}</strong> customers, generating <strong>${posts.reduce((acc, value)=>{return acc + value.revenue}, 0)}</strong> in revenue, and a total expenses of <strong>${posts.reduce((acc, value)=>{return acc + value.expenses}, 0)}</strong>.</Text>


       <List spacing={'2'}>
          <ListItem>

            <ListIcon as={FaCheckCircle}/>Best Revenue Month: <strong>{maxRevenueMonth} (${maxRevenue})</strong>
          </ListItem>

          <ListItem>
            <ListIcon as={FaCheckCircle}/>Highest Expense: <strong>{maxExpenseMonth} (${maxExpense})</strong>
          </ListItem>

          <ListItem>
            <ListIcon as={FaCheckCircle}/>Most Customers Served: <strong>{mostCustomersMonth} ({mostCustomers})</strong>
          </ListItem>

          <ListItem>
            <ListIcon as={FaCheckCircle}/>Lowest Revenue Month: <strong>{minRevenueMonth} (${minRevenue})</strong>
          </ListItem>

          <ListItem>
            <ListIcon as={FaCheckCircle}/>Lowest Expense: <strong>{minExpenseMonth} (${minExpense})</strong>
          </ListItem>

       </List>
        
       </Flex>

     
      </Flex>

    </Box>
  )
}

export default Expense
