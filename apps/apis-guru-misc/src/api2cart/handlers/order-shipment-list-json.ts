import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderShipmentListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentListJsonHandler = app.openapi(getOrderShipmentListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
