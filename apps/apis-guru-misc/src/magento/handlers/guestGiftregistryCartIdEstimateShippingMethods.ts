import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestGiftregistryCartIdEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestGiftregistryCartIdEstimateShippingMethodsHandler = app.openapi(
  postV1GuestGiftregistryCartIdEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
