import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ShipmentTrackRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentTrackHandler = app.openapi(postV1ShipmentTrackRoute, (c) => {
  throw new Error('Not implemented')
})
