import { useState } from "react"
import LanguageContext from "../context"

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("EN")

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            { children }
        </LanguageContext.Provider>
    )
}

export default LanguageProvider