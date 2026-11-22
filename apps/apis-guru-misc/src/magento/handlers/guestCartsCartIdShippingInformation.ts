import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdShippingInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdShippingInformationHandler = app.openapi(
  postV1GuestCartsCartIdShippingInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
