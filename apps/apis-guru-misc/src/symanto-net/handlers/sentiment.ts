import { OpenAPIHono } from '@hono/zod-openapi'
import { postSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const sentimentHandler = app.openapi(postSentimentRoute, (c) => {
  throw new Error('Not implemented')
})
