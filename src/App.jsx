import { ToastContainer } from "react-toastify"
import RouterMain from "./routes"
import { GlobalStyle } from "./styles/globalStyles"
import { UserProvider } from "./providers/UserProvider"

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-right" theme="dark"/>
      
      <UserProvider>
        
          <RouterMain />
        
      </UserProvider>
    </>
  )
}

export default App
