import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js'
import { useContext } from 'react'
import { contextData } from './Context'
import { Box, Text, Flex } from '@chakra-ui/react'
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
const {posts, isLoading, isError} = useContext(contextData)
console.log(posts)



    ChartJS.register(CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

    const pieData ={
      labels:["Total Revenue", "Total Expense", "Total Profit"],
      datasets:[
        {
          data:[
            posts.reduce((acc, value)=>{return acc + value.revenue},0),
            posts.reduce((acc, value)=>{return acc + value.expenses},0),
            posts.reduce((acc, value)=>{return acc + value.profit},0)
          ],
          backgroundColor:["green", "red", "blue"]
        }
      ]
    }
  return (
    <Box w={["100%", "50%", "50%"]}>
      <Pie
      data={pieData}
      options={{
        responsive:true,
        plugins:{
          title:{
              display:true,
              text: "Revenue, Expenses, and Profit of Lucy's Coffee Shop 2024"
          }
      },
      }}
      />
    </Box>
  )
}

export default PieChart
