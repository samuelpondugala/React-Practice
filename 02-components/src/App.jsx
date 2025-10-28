import Card from "./components/card"
import NavBar from "./components/navBar"


const App = () => {
  const user = "David Samuel" 
  const age = 40
  return (
    <div>
      <NavBar/>
      <h1>Hello guys, I am {user}</h1>
      <h2>and I am {age} year old</h2>
      <Card/>
    </div>
    
  )
}

export default App
