import { OpenAPIHono } from '@hono/zod-openapi'
import { getShippingQuoteShippingQuoteIdRoute, postShippingQuoteRoute } from '../routes'

const app = new OpenAPIHono()

export const shippingQuoteHandler = app
  .openapi(postShippingQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShippingQuoteShippingQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
