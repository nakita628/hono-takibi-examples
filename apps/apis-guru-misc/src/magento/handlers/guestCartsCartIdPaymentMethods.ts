import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdPaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdPaymentMethodsHandler = app.openapi(
  getV1GuestCartsCartIdPaymentMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
