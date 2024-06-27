import router from "./react-router/router.tsx";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext.tsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
