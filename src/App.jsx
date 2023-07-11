import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'
import FormSection from './components/FormSection/FormSection'
// import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="mainContainer">
    <Navigation></Navigation>
    <Content></Content>
    <FormSection></FormSection>
    </div>
  
    </>
  )
}

export default App
