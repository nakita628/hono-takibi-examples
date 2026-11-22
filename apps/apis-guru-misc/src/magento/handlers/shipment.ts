import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ShipmentIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentHandler = app.openapi(postV1ShipmentIndexRoute, (c) => {
  throw new Error('Not implemented')
})
