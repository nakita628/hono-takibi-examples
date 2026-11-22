import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsGuestCartsCartIdGiftCardsGiftCardCodeHandler = app.openapi(
  deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
