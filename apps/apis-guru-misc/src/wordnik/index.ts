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
  getWordsJsonRandomWordRoute,
  getWordsJsonRandomWordsRoute,
  getWordsJsonReverseDictionaryRoute,
  getWordsJsonSearchQueryRoute,
  getWordsJsonWordOfTheDayRoute,
} from './routes'
import {
  getWordJsonWordAudioRouteHandler,
  getWordJsonWordDefinitionsRouteHandler,
  getWordJsonWordEtymologiesRouteHandler,
  getWordJsonWordExamplesRouteHandler,
  getWordJsonWordFrequencyRouteHandler,
  getWordJsonWordHyphenationRouteHandler,
  getWordJsonWordPhrasesRouteHandler,
  getWordJsonWordPronunciationsRouteHandler,
  getWordJsonWordRelatedWordsRouteHandler,
  getWordJsonWordScrabbleScoreRouteHandler,
  getWordJsonWordTopExampleRouteHandler,
  getWordsJsonRandomWordRouteHandler,
  getWordsJsonRandomWordsRouteHandler,
  getWordsJsonReverseDictionaryRouteHandler,
  getWordsJsonSearchQueryRouteHandler,
  getWordsJsonWordOfTheDayRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWordJsonWordAudioRoute, getWordJsonWordAudioRouteHandler)
  .openapi(getWordJsonWordDefinitionsRoute, getWordJsonWordDefinitionsRouteHandler)
  .openapi(getWordJsonWordEtymologiesRoute, getWordJsonWordEtymologiesRouteHandler)
  .openapi(getWordJsonWordExamplesRoute, getWordJsonWordExamplesRouteHandler)
  .openapi(getWordJsonWordFrequencyRoute, getWordJsonWordFrequencyRouteHandler)
  .openapi(getWordJsonWordHyphenationRoute, getWordJsonWordHyphenationRouteHandler)
  .openapi(getWordJsonWordPhrasesRoute, getWordJsonWordPhrasesRouteHandler)
  .openapi(getWordJsonWordPronunciationsRoute, getWordJsonWordPronunciationsRouteHandler)
  .openapi(getWordJsonWordRelatedWordsRoute, getWordJsonWordRelatedWordsRouteHandler)
  .openapi(getWordJsonWordScrabbleScoreRoute, getWordJsonWordScrabbleScoreRouteHandler)
  .openapi(getWordJsonWordTopExampleRoute, getWordJsonWordTopExampleRouteHandler)
  .openapi(getWordsJsonRandomWordRoute, getWordsJsonRandomWordRouteHandler)
  .openapi(getWordsJsonRandomWordsRoute, getWordsJsonRandomWordsRouteHandler)
  .openapi(getWordsJsonReverseDictionaryRoute, getWordsJsonReverseDictionaryRouteHandler)
  .openapi(getWordsJsonSearchQueryRoute, getWordsJsonSearchQueryRouteHandler)
  .openapi(getWordsJsonWordOfTheDayRoute, getWordsJsonWordOfTheDayRouteHandler)

export default app
