import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { createContext} from 'react'

export const ContextTheme = createContext()

const ThemeContext = ({children}) => {
    const [light, setLight] = useState(()=>{
        const storedValue = localStorage.getItem('light')
        return storedValue !== null ? JSON.parse(storedValue) : true
    })

    useEffect(()=>{
        localStorage.setItem('light', JSON.stringify(light))
    }, [light])

    const handleToggle = ()=>{
        setLight(prevLight => !prevLight)
    }
    
  return (
    <Box>
        <ContextTheme.Provider value={{light, handleToggle}}>
        {children}
        </ContextTheme.Provider>
    </Box>
  )
}

export default ThemeContext
