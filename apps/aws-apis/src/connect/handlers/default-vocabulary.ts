import { OpenAPIHono } from '@hono/zod-openapi'
import { putDefaultVocabularyInstanceIdLanguageCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultVocabularyHandler = app.openapi(
  putDefaultVocabularyInstanceIdLanguageCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
