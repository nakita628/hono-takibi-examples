import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEntriesSourceLanguageWordIdSentencesRoute,
  getEntriesSourceLangWordIdAntonymsRoute,
  getEntriesSourceLangWordIdFiltersRoute,
  getEntriesSourceLangWordIdRegionsRegionRoute,
  getEntriesSourceLangWordIdRoute,
  getEntriesSourceLangWordIdSynonymsAntonymsRoute,
  getEntriesSourceLangWordIdSynonymsRoute,
  getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entriesHandler = app
  .openapi(getEntriesSourceLanguageWordIdSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdAntonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdRegionsRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdSynonymsAntonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
