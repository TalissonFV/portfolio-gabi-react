import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {

  return (
    <div style={{display: "flex", minHeight: "100%", flexDirection: "column", justifyContent: "flex-start"}}>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
