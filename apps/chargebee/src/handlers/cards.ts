import { OpenAPIHono } from '@hono/zod-openapi'
import { getCardsCustomerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app.openapi(getCardsCustomerIdRoute, (c) => {
  throw new Error('Not implemented')
})
