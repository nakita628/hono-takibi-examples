import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableQuoteRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteRequestHandler = app.openapi(postV1NegotiableQuoteRequestRoute, (c) => {
  throw new Error('Not implemented')
})
