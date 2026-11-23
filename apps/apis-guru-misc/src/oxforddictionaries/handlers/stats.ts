import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute,
  getStatsFrequencyWordSourceLangIndexRoute,
  getStatsFrequencyWordsSourceLangIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsFrequencyWordSourceLangIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsFrequencyWordsSourceLangIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
