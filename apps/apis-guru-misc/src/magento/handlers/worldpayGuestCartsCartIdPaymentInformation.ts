import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1WorldpayGuestCartsCartIdPaymentInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const worldpayGuestCartsCartIdPaymentInformationHandler = app.openapi(
  postV1WorldpayGuestCartsCartIdPaymentInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
