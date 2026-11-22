import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ShipmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentIdHandler = app.openapi(getV1ShipmentIdRoute, (c) => {
  throw new Error('Not implemented')
})
