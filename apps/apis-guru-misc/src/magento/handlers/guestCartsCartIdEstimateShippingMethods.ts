import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdEstimateShippingMethodsHandler = app.openapi(
  postV1GuestCartsCartIdEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
