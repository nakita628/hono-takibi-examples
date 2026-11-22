import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWordJsonWordAudioRoute,
  getWordJsonWordDefinitionsRoute,
  getWordJsonWordEtymologiesRoute,
  getWordJsonWordExamplesRoute,
  getWordJsonWordFrequencyRoute,
  getWordJsonWordHyphenationRoute,
  getWordJsonWordPhrasesRoute,
  getWordJsonWordPronunciationsRoute,
  getWordJsonWordRelatedWordsRoute,
  getWordJsonWordScrabbleScoreRoute,
  getWordJsonWordTopExampleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wordHandler = app
  .openapi(getWordJsonWordAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordEtymologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordHyphenationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordPhrasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordPronunciationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordRelatedWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordScrabbleScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordJsonWordTopExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
