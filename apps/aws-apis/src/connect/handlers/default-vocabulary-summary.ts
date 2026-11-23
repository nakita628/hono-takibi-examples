import { OpenAPIHono } from '@hono/zod-openapi'
import { postDefaultVocabularySummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultVocabularySummaryHandler = app.openapi(
  postDefaultVocabularySummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
