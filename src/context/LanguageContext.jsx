import { createContext, useState } from "react";
import en from "@/i18n/en.json";
import fr from "@/i18n/fr.json";

export const LanguageContext = createContext();

const languages = {
    en,
    fr,
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const value = {
        lang,
        t: languages[lang],
        switchLanguage: setLang,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
