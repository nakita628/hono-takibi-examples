import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdGiftCardsGiftCardCodeHandler = app.openapi(
  deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
