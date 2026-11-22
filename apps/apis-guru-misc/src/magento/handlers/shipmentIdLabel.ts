import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ShipmentIdLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentIdLabelHandler = app.openapi(getV1ShipmentIdLabelRoute, (c) => {
  throw new Error('Not implemented')
})
