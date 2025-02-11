import React from 'react'
import { createContext } from 'react'
import {useQuery} from '@tanstack/react-query'

export const contextData = createContext()
const ContextProvider = ({children}) => {

  const {data: posts = [], isLoading, isError} = useQuery({
    queryFn : ()=>fetch("http://localhost:3000/daily_records").then((response)=>{return response.json()}),
    

    queryKey: ["posts"]
  })



  return (
   <contextData.Provider value={{posts, isLoading, isError}}>
    {children}
   </contextData.Provider>
  )
}

export default ContextProvider
