import React, { useState } from 'react';
import Header from "./Components/Header/header"
import Choose from "./Components/Choose-color/choose"
import Footer from "./Components/Footer/footer"
import Audio from "./Components/Audio/Audio"
import Composition from "./Components/Composition/composition"
import Battery from "./Components/Battery/battery"
function App() {
  const [active, isActive] = useState("color--red");

  return (
    <>
      <Header active={active}/>
      <Choose active={active} isActive={isActive}/>
      <Composition active={active}/>
      <Battery active={active}/>
      <Audio />
      <Footer/>
    </>
  )
}

export default App
