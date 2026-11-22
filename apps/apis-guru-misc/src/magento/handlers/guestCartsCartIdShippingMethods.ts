import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdShippingMethodsHandler = app.openapi(
  getV1GuestCartsCartIdShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
