import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineEstimateShippingMethodsHandler = app.openapi(
  postV1CartsMineEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
