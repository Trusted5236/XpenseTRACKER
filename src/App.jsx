import { Button } from "@chakra-ui/react"
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Dashboard from "./Pages/Dashboard"
import Income from "./Pages/Income"
import Expense from "./Pages/Expense"



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>

      <Route
      index
      element={<Dashboard/>}
      />

      <Route
      path="income"
      element={<Income/>}
      />

      <Route
      path="expense"
      element={<Expense/>}
      />

    </Route>
  ))

  return (
    
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
