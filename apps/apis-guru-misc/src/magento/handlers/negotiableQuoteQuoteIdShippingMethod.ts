import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1NegotiableQuoteQuoteIdShippingMethodRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteQuoteIdShippingMethodHandler = app.openapi(
  putV1NegotiableQuoteQuoteIdShippingMethodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
