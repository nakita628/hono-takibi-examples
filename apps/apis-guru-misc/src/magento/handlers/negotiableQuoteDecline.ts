import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableQuoteDeclineRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteDeclineHandler = app.openapi(postV1NegotiableQuoteDeclineRoute, (c) => {
  throw new Error('Not implemented')
})
