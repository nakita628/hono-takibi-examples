import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreGiftCardsIdOrCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const giftCardsHandler = app.openapi(getStoreGiftCardsIdOrCodeRoute, (c) => {
  throw new Error('Not implemented')
})
