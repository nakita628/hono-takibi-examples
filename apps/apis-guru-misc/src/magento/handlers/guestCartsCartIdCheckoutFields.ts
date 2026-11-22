import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdCheckoutFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCheckoutFieldsHandler = app.openapi(
  postV1GuestCartsCartIdCheckoutFieldsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
