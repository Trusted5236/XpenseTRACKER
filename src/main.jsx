import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import ContextProvider from './Components/Context.jsx'
import ThemeContext from './Components/ThemeContext.jsx'

let queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
   <QueryClientProvider client={queryClient}>
    <ContextProvider>
    <ThemeContext>
    <App />
    </ThemeContext>
    </ContextProvider>
    </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
