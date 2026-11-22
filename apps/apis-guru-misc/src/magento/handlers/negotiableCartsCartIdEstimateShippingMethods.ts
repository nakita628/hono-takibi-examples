import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableCartsCartIdEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdEstimateShippingMethodsHandler = app.openapi(
  postV1NegotiableCartsCartIdEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
