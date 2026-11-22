import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NegotiableQuoteQuoteIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteQuoteIdCommentsHandler = app.openapi(
  getV1NegotiableQuoteQuoteIdCommentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
