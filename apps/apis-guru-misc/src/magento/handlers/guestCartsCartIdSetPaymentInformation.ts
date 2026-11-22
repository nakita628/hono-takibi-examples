import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdSetPaymentInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdSetPaymentInformationHandler = app.openapi(
  postV1GuestCartsCartIdSetPaymentInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
