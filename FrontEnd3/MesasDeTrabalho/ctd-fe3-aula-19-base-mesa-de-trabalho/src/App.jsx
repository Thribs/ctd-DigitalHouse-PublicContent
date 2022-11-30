import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';
import LanguageProvider from './providers/LanguageProvider';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLanguage = () => {
    setLanguage(language => {
      //DICA: Função que troca um idioma por outro (ao clicar no botão)
      setLanguage(language)
    })
  }

  return (
    <div className="App">
      <>{/*  DICA: Adicione o provider LanguageContext */}
        <LanguageProvider>
          <Navbar />
          <Body />
        </LanguageProvider>
      </>
    </div>
  )
}

export default App