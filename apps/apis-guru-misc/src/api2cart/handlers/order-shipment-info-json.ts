import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderShipmentInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentInfoJsonHandler = app.openapi(getOrderShipmentInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
