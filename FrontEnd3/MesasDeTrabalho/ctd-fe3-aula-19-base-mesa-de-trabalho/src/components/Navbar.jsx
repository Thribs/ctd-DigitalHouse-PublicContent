import React, { useContext } from 'react'
import "../App.css"
import LanguageContext, { languages } from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    
    */
    const { language, setLanguage } = useContext(LanguageContext)
    const {text} = language
    return (
        <div className="navbar">
            {/* DICA: Deixe essas informações dinâmicas, utilize os valores capturados via contexto (veja 'text', na linha 8) */}
            <p>{text.home}</p> 
            <p>Idioma atual: {text.current}</p>
            <button onClick={handleChangeLanguage}>{text.button}</button>
        </div>
    )
}

export default Navbar

/*
{
    "title": "Bem-vindo ao projeto de traduções da Digital House",
    "description": "Você aprenderá como usar o contexto para fazer suas traduções",
    "home": "Início",
    "current": "Idioma atual",
    "button": "Trocar Idioma"
}
*/