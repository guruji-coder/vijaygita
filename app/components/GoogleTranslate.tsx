import axios from "axios";

const API_URL = "https://translation.googleapis.com/language/translate/v2";

const translateText = async (text: string, targetLanguage: string) => {
  const response = await axios.post(
    `${API_URL}?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );
  return response.data.data.translations[0].translatedText;
};

export default translateText;
