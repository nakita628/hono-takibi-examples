import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1NegotiableQuoteQuoteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteQuoteIdHandler = app.openapi(putV1NegotiableQuoteQuoteIdRoute, (c) => {
  throw new Error('Not implemented')
})
