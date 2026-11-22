import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2LanguageIntentRoute, postV2LanguageSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const languagePredictionHandler = app
  .openapi(postV2LanguageIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageSentimentRoute, (c) => {
    throw new Error('Not implemented')
  })
