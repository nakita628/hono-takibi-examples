import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsGuestCartsCartIdCheckGiftCardGiftCardCodeHandler = app.openapi(
  getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
