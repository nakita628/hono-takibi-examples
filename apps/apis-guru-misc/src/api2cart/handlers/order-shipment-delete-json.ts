import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteOrderShipmentDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentDeleteJsonHandler = app.openapi(
  deleteOrderShipmentDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
