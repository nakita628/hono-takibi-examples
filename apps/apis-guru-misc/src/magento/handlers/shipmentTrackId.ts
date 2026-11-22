import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ShipmentTrackIdRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentTrackIdHandler = app.openapi(deleteV1ShipmentTrackIdRoute, (c) => {
  throw new Error('Not implemented')
})
