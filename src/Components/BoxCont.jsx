import React from 'react'
import { Box, Flex, Icon, Text, transition } from '@chakra-ui/react'
;
import { hover } from 'framer-motion';

const BoxCont = ({icon, text, figure, trend}) => {
  return (
   <Box w={["100%", "45%", "30%"]} bg={''} p={'2'} borderRadius={'lg'} border={'1px'} borderColor={'grey'} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" _hover={{transform:'translateY(-5px)', shadow:"md"}} transition={'all 0.3s ease-in-out'}>
       <Flex direction={'column'} gap={5}>
       <Box>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Icon as={icon} fontSize={["lg", "lg", "4xl"]}></Icon>
                <Text fontSize={["lg", "lg", "2xl"]}>{text}</Text>
            </Flex>
        </Box>
        
        <Box>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Text fontSize={["lg", "2xl", "2xl"]} fontWeight={'bold'} color={text === "Expense" ? "red" : 'green'}>
                {figure}
            </Text>

            <Icon as={trend} fontSize={["lg", "lg", "4xl"]} color={text === "Expense" ? "red" : 'green'}></Icon>
            </Flex>
        </Box>
       </Flex>
   </Box>
  )
}

export default BoxCont
