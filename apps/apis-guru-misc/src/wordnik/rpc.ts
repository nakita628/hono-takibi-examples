import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWordJsonWordAudio(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].audio.$get(args, options))
}

export async function getWordJsonWordDefinitions(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].definitions.$get(args, options))
}

export async function getWordJsonWordEtymologies(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].etymologies.$get(args, options))
}

export async function getWordJsonWordExamples(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].examples.$get(args, options))
}

export async function getWordJsonWordFrequency(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].frequency.$get(args, options))
}

export async function getWordJsonWordHyphenation(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].hyphenation.$get(args, options))
}

export async function getWordJsonWordPhrases(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].phrases.$get(args, options))
}

export async function getWordJsonWordPronunciations(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].pronunciations.$get(args, options))
}

export async function getWordJsonWordRelatedWords(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].relatedWords.$get(args, options))
}

export async function getWordJsonWordScrabbleScore(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].scrabbleScore.$get(args, options))
}

export async function getWordJsonWordTopExample(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['word.json'][':word'].topExample.$get(args, options))
}

export async function getWordsJsonRandomWord(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['words.json'].randomWord.$get(args, options))
}

export async function getWordsJsonRandomWords(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['words.json'].randomWords.$get(args, options))
}

export async function getWordsJsonReverseDictionary(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['words.json'].reverseDictionary.$get(args, options))
}

export async function getWordsJsonSearchQuery(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['words.json'].search[':query'].$get(args, options))
}

export async function getWordsJsonWordOfTheDay(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['words.json'].wordOfTheDay.$get(args, options))
}
