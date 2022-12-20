import axios from "axios";

async function translate(text) {
  let res = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=AIzaSyB9N89EL7BjXpdKYoz9I-1mPneNuX_9ACQ`,
    { q: text, target: "en" }
  );
  let translation = res.data.data.translations[0].translatedText;
  return translation;
}

export default translate;
