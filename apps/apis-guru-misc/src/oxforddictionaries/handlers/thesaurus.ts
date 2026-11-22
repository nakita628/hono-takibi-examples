import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEntriesSourceLangWordIdAntonymsRoute,
  getEntriesSourceLangWordIdSynonymsAntonymsRoute,
  getEntriesSourceLangWordIdSynonymsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thesaurusHandler = app
  .openapi(getEntriesSourceLangWordIdAntonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdSynonymsAntonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
