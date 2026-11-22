import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsCartIdGiftCardsGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdGiftCardsGiftCardCodeHandler = app.openapi(
  deleteV1CartsCartIdGiftCardsGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
