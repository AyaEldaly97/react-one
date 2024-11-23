import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Home from "./Pages/Home/Home"
import Layout from "./Components/Layout/Layout"

function App() {

  const routes = createBrowserRouter([
    {path:"/", element: <Layout/> , children: [
      {index: true , element: <Home/> },
      {path:"about" , element: <About/> },
      {path:"portfolio" , element: <Portfolio/> },
      {path:"contact" , element: <Contact/> },
    ]}
  ])


  return <>
    <RouterProvider router={routes} />
  </>
}

export default App
