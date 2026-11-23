import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDomainsSourceDomainsLanguageTargetDomainsLanguage(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':source_domains_language'][':target_domains_language'].$get(args, options),
  )
}

export async function getDomainsSourceLanguage(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':source_language'].$get(args, options))
}

export async function getEntriesSourceLanguageWordIdSentences(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_language'][':word_id'].sentences.$get(args, options),
  )
}

export async function getEntriesSourceLangWordId(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entries[':source_lang'][':word_id'].$get(args, options))
}

export async function getEntriesSourceLangWordIdAntonyms(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_lang'][':word_id'].antonyms.$get(args, options),
  )
}

export async function getEntriesSourceLangWordIdRegionsRegion(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_lang'][':word_id']['regions={region}'].$get(args, options),
  )
}

export async function getEntriesSourceLangWordIdSynonyms(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_lang'][':word_id'].synonyms.$get(args, options),
  )
}

export async function getEntriesSourceLangWordIdSynonymsAntonyms(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(args, options),
  )
}

export async function getEntriesSourceLangWordIdFilters(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_lang'][':word_id'][':filters'].$get(args, options),
  )
}

export async function getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entries[':source_translation_language'][':word_id'][
      'translations={target_translation_language}'
    ].$get(args, options),
  )
}

export async function getFilters(
  args: InferRequestType<typeof client.filters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.filters.$get(args, options))
}

export async function getFiltersEndpoint(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.filters[':endpoint'].$get(args, options))
}

export async function getGrammaticalFeaturesSourceLanguage(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grammaticalFeatures[':source_language'].$get(args, options))
}

export async function getInflectionsSourceLangWordIdFilters(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inflections[':source_lang'][':word_id'][':filters'].$get(args, options),
  )
}

export async function getLanguages(
  args: InferRequestType<typeof client.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.languages.$get(args, options))
}

export async function getLexicalcategoriesLanguage(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lexicalcategories[':language'].$get(args, options))
}

export async function getRegionsSourceLanguage(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':source_language'].$get(args, options))
}

export async function getRegistersSourceLanguage(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registers[':source_language'].$get(args, options))
}

export async function getRegistersSourceRegisterLanguageTargetRegisterLanguage(
  args: InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registers[':source_register_language'][':target_register_language'].$get(args, options),
  )
}

export async function getSearchSourceLang(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':source_lang'].$get(args, options))
}

export async function getSearchSourceSearchLanguageTranslationsTargetSearchLanguage(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':source_search_language']['translations={target_search_language}'].$get(
      args,
      options,
    ),
  )
}

export async function getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(
      args,
      options,
    ),
  )
}

export async function getStatsFrequencyWordSourceLangIndex(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.frequency.word[':source_lang'].index.$get(args, options))
}

export async function getStatsFrequencyWordsSourceLangIndex(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.frequency.words[':source_lang'].index.$get(args, options))
}

export async function getWordlistSourceLangFiltersAdvanced(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wordlist[':source_lang'][':filters_advanced'].$get(args, options),
  )
}

export async function getWordlistSourceLangFiltersBasic(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wordlist[':source_lang'][':filters_basic'].$get(args, options))
}
