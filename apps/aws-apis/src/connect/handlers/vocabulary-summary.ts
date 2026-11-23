import { OpenAPIHono } from '@hono/zod-openapi'
import { postVocabularySummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const vocabularySummaryHandler = app.openapi(postVocabularySummaryInstanceIdRoute, (c) => {
  throw new Error('Not implemented')
})
