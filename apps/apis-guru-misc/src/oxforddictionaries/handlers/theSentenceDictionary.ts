import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntriesSourceLanguageWordIdSentencesRoute } from '../routes'

const app = new OpenAPIHono()

export const theSentenceDictionaryHandler = app.openapi(
  getEntriesSourceLanguageWordIdSentencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
