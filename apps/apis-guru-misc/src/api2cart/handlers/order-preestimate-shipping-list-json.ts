import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderPreestimateShippingListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderPreestimateShippingListJsonHandler = app.openapi(
  postOrderPreestimateShippingListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
