import { NextResponse } from "next/server";
import translateText from "@/app/components/GoogleTranslate";
import {
  getCachedTranslation,
  cacheTranslation,
} from "@/app/utils/translationCache";

export async function POST(request: Request) {
  const { text, targetLanguage } = await request.json();

  // Check if the translation is already cached
  const cachedTranslation = await getCachedTranslation(text, targetLanguage);
  if (cachedTranslation) {
    return NextResponse.json({ translatedText: cachedTranslation });
  }

  // If not cached, call the Google Translate API
  const translatedText = await translateText(text, targetLanguage);

  // Cache the new translation
  await cacheTranslation(text, targetLanguage, translatedText);

  return NextResponse.json({ translatedText });
}
