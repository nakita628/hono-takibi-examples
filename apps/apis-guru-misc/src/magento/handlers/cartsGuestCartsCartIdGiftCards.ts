import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsGuestCartsCartIdGiftCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsGuestCartsCartIdGiftCardsHandler = app.openapi(
  postV1CartsGuestCartsCartIdGiftCardsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
