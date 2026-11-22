import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdDeliveryOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdDeliveryOptionHandler = app.openapi(
  postV1GuestCartsCartIdDeliveryOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
