import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsCartIdEstimateShippingMethodsByAddressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdEstimateShippingMethodsByAddressIdHandler = app.openapi(
  postV1CartsCartIdEstimateShippingMethodsByAddressIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
