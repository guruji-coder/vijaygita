"use client";
import { Tiro_Devanagari_Sanskrit } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
// import translate from "translate-google";
import translateText from "./components/GoogleTranslate";
import Schlok from "./components/Schlok";
import { GitaDarshanSchlocks } from "./utils/GitaDarshanSchlocks";

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari"],
  weight: "400",
});

const TOTAL_LANGUAGES = [
  { id: 1, language: "English", value: "en" },
  { id: 2, language: "Hindi", value: "hi" },
  { id: 3, language: "Kannada", value: "kn" },
  { id: 4, language: "Chinese", value: "zh" },
  { id: 5, language: "Spanish", value: "es" },
  { id: 6, language: "Russian", value: "ru" },
  { id: 7, language: "French", value: "fr" },
  { id: 8, language: "Italian", value: "it" },
  { id: 9, language: "German", value: "de" },
  { id: 10, language: "Japanese", value: "ja" },
  { id: 11, language: "Arabic", value: "ar" },
];

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [translatedSchlocks, setTranslatedSchlocks] =
    useState(GitaDarshanSchlocks);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLanguage = e.currentTarget.value;
    setOpen(!isOpen);
    const translatedMeanings = await Promise.all(
      GitaDarshanSchlocks.map(async (schlock) => {
        const translatedMeaning = await translateText(
          schlock.meaning,
          selectedLanguage
        );
        return { ...schlock, meaning: translatedMeaning };
      })
    );

    setTranslatedSchlocks(translatedMeanings);
  };

  const handleButtonClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex flex-col  items-center justify-center text-2xl text-center px-4 md:px-40 py-10 ">
      {!isOpen && (
        <>
          <Image
            src="https://krishnastore.in/images/cache/1430-586x1000.jpg"
            alt="guru"
            width={300}
            height={300}
          />
          <h1 className="my-5">Acharya Vijay Kumar Gita Class</h1>

          <h3 className={`${tiroDevanagari.className} mb-3 `}>Gita Darshan</h3>
          <main className="change-text mx-auto text-xl">
            The Gita Dhyanam, also known as the Gita Dhyana or Dhyana Ślokas, is
            a nine-verse Sanskrit poem traditionally recited before studying the
            Bhagavad Gita. This invocation serves to invoke divine grace and
            prepare the mind for the teachings of the Gita.
            {translatedSchlocks.map((schlock) => (
              <Schlok key={schlock.SanskritSchlock} {...schlock} />
            ))}
          </main>
          <button
            onClick={handleButtonClick}
            className="fixed bottom-10 px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
          >
            CHANGE LANGUAGE
          </button>
        </>
      )}

      {isOpen && (
        <section className="mt-5  flex flex-col items-center justify-center">
          {TOTAL_LANGUAGES.map((languageItem) => (
            <button
              onClick={handleClick}
              key={languageItem.id}
              value={languageItem.value}
              className="px-12 py-4 mt-10 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
            >
              {languageItem.language}
            </button>
          ))}
          <button
            onClick={handleClick}
            className="px-12 py-4 mt-10 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
          >
            CLOSE
          </button>
        </section>
      )}
    </div>
  );
}
