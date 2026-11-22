import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommercePriceBooks202609PriceBooksRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(getCommercePriceBooks202609PriceBooksRoute, (c) => {
  throw new Error('Not implemented')
})
