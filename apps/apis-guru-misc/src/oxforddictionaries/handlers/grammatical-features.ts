import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrammaticalFeaturesSourceLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const grammaticalFeaturesHandler = app.openapi(
  getGrammaticalFeaturesSourceLanguageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
