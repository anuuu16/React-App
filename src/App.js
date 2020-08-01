import React, { useState } from 'react';
import { IntlProvider } from "react-intl";
import en from "./app-translation/en.json";
import es from "./app-translation/es.json";
import fr from "./app-translation/fr.json";
import de from "./app-translation/de.json";
import AppRoute from './app/appRoute';
import './App.css';

function App() {
  const messages = {
    en, es, fr, de,
  };
  const [locale, setLocale] = useState("en");
  const handleSelect = e => {
    setLocale(e.target.value);
  };
  return (
    <div className="App">

      <select onChange={handleSelect} defaultValue={locale}>
        {["en", "es", "fr", "de"].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={messages[locale]}>
        <AppRoute></AppRoute>
      </IntlProvider>

    </div>
  );
}

export default App;
