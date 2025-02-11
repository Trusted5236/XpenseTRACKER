import React, { useState } from 'react'
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Input} from '@chakra-ui/react'
import { useContext } from 'react'
import { contextData } from './Context'
import {Line, Bar, Pie} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js'
import { ContextTheme } from '../Components/ThemeContext'


const LineChart = () => {
    const {light} = useContext(ContextTheme)
    const {posts, isLoading, isError} = useContext(contextData)
    const [Search, setSearch] = useState("")

    ChartJS.register(CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

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
    console.log(monthlyData)

    const lineChartData ={
        labels: monthlyData.map((d)=> d.month),
        

        datasets: [
            {
                label: "Revenue",
                data: monthlyData.map((d)=>d.revenue),
                borderColor: "green",
                fill: "origin",
                borderWidth:1,
                tension:0.4,
                backgroundColor:["green", "red", "blue"]
            },
            
            {
                label: "Expenses",
                data: monthlyData.map((d)=>d.expenses),
                borderColor: "red",
                backgroundColor:"red",
                fill: true,
                borderWidth:1,
                tension:0.4
                
            },

            {
                label: "Profit",
                data: monthlyData.map((d) => d.profit),
                borderColor: "blue",
                fill: "origin",
                borderWidth: 1,
                tension: 0.4,
                backgroundColor: "blue"
            },

        ]
    }

    const filteredData = monthlyData.filter((item)=>item.month.toLowerCase().includes(Search.toLowerCase())) || monthlyData
 

  return (
    <Flex w={["100%"]} direction={["column"]} gap={'8'}>
        <Box w={["100%"]} borderRadius={'lg'} border={'1px'} borderColor={'grey'} p={"2"}>
        <Flex direction={["column"]}>
            <Text fontSize={'2xl'} fontStyle={'italic'}>Lucy's Coffee Shop 2024 Expense Data</Text>
            <Line
                
                data={lineChartData}
                options={{
                    responsive: true,
                    plugins:{
                        title:{
                            display:true,
                            text: "Revenue, Expenses, and Profit of Lucy's Coffee Shop 2024"
                        }
                    },

                  

                    scales:{
                        x:{
                            grid:{
                                display:true,
                                color:'grey'
                            }
                        },
                        y:{
                            grid:{
                                display:true,
                                color:'grey'
                            }
                        }
                    },


                }}    
            
            />
        </Flex>

    </Box>

   <TableContainer w={["100%"]} borderRadius={'lg'} border={'1px'} borderColor={'grey'} p={"2"}>

        <Flex w={'100%'} direction={'row'} justifyContent={'flex-end'} alignItems={'start'} py={'2'}>

        <datalist id='list'>
                {monthlyData.map((item, index)=>(
                    <option key={index}>{item.month}</option>
                ))}
            </datalist>

            <Input
            placeholder='Search by month...'
            type='search'
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
            list='list'
            w={'50%'}
            />  
      </Flex>

   <Table variant={light ? 'striped' : 'unstyled'} color={light ? 'black' : 'white'} bg={light ? '' : 'gray.700'}>
   

        <Thead>
            <Tr>
                <Th>Month</Th>
                <Th>No. of Customers</Th>
                <Th>Revenue ($)</Th>
                <Th>Expense ($)</Th>
                <Th>Profit ($)</Th>
            </Tr>
        </Thead>

        <Tbody>
            {filteredData.reverse().splice(0, 6).map((item, index)=>(
                <Tr key={index}>
                    <Td>{item.month}</Td>
                    <Td>{item.customer_count}</Td>
                    <Td>${item.revenue}</Td>
                    <Td color={'red'}>${item.expenses}</Td>
                    <Td color={'green'}>${item.profit}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
   </TableContainer>
    </Flex>
  )
}

export default LineChart
