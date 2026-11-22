import { OpenAPIHono } from '@hono/zod-openapi'
import {
  dictionaryEntriesHandler,
  lemmatronHandler,
  lexiStatsHandler,
  searchHandler,
  thesaurusHandler,
  theSentenceDictionaryHandler,
  translationHandler,
  utilityHandler,
  wordlistHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', utilityHandler)
  .route('/', theSentenceDictionaryHandler)
  .route('/', dictionaryEntriesHandler)
  .route('/', thesaurusHandler)
  .route('/', translationHandler)
  .route('/', lemmatronHandler)
  .route('/', searchHandler)
  .route('/', lexiStatsHandler)
  .route('/', wordlistHandler)

export default app
