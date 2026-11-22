import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ShipmentIdCommentsRoute, postV1ShipmentIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentIdCommentsHandler = app
  .openapi(getV1ShipmentIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
