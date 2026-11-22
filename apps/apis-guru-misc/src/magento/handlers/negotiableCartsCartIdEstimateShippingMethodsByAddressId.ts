import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdEstimateShippingMethodsByAddressIdHandler = app.openapi(
  postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
