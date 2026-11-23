import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderFulfillmentStatusListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderFulfillmentStatusListJsonHandler = app.openapi(
  getOrderFulfillmentStatusListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
