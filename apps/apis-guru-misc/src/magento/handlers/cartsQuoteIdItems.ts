import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsQuoteIdItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsQuoteIdItemsHandler = app.openapi(postV1CartsQuoteIdItemsRoute, (c) => {
  throw new Error('Not implemented')
})
