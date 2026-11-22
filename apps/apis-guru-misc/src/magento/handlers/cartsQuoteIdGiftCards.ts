import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsQuoteIdGiftCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsQuoteIdGiftCardsHandler = app.openapi(getV1CartsQuoteIdGiftCardsRoute, (c) => {
  throw new Error('Not implemented')
})
