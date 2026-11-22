import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const switchServicePaymentHandler = app.openapi(
  getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
