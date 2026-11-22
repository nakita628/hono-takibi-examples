import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineEstimateShippingMethodsByAddressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineEstimateShippingMethodsByAddressIdHandler = app.openapi(
  postV1CartsMineEstimateShippingMethodsByAddressIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
