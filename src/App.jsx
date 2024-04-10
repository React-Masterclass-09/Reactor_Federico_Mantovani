import { RouterProvider } from 'react-router-dom'
import router from "./router/router"

function App() {

  return (
    <>

    {/* Qui bisogna richiamare il componente UserContextProvider e wrappare al suo interno il Router Provider */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
