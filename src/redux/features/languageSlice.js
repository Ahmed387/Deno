import { createSlice } from "@reduxjs/toolkit";
import { translations } from "./translations";

const initialState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "ar" : "en";
      // Update the document direction based on language
      document.documentElement.dir = state.language === "en" ? "rtl" : "ltr";
      document.documentElement.lang = state.language === "en" ? "ar" : "en";
    },
  },
});

// Selector to get the current language
export const selectLanguage = (state) => state.language.language;

// Selector to get translations
export const selectTranslation = (state, key) => {
  const currentLanguage = selectLanguage(state);
  return translations[currentLanguage][key];
};

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
