const cache = new Map<string, string>(); // Simple in-memory cache for demonstration

export async function getCachedTranslation(
  text: string,
  targetLanguage: string
): Promise<string | undefined> {
  const key = `${text}-${targetLanguage}`;
  return cache.get(key);
}

export async function cacheTranslation(
  text: string,
  targetLanguage: string,
  translatedText: string
): Promise<void> {
  const key = `${text}-${targetLanguage}`;
  cache.set(key, translatedText);
}
