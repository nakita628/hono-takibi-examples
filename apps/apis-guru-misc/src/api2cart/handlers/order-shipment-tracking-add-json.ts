import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderShipmentTrackingAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentTrackingAddJsonHandler = app.openapi(
  postOrderShipmentTrackingAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
