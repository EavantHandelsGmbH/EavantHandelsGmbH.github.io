import { RouterProvider } from "react-router"
import router from "./util/router.jsx"

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
