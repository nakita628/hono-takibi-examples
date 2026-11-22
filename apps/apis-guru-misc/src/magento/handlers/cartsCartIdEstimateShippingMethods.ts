import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsCartIdEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdEstimateShippingMethodsHandler = app.openapi(
  postV1CartsCartIdEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
