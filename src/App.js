import ContainerBody from "./components/ContainerBody"
import Header from "./components/Header"
import Scrollers from "./components/Scrollers"

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#05408c',
    },
    secondary: {
      main: blue[300],
    }
  },
})

const App = () => {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <ContainerBody />
      <Scrollers />
    </ThemeProvider>
    </>
  )
}


export default App