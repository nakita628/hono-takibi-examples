import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ShipmentIdEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentIdEmailsHandler = app.openapi(postV1ShipmentIdEmailsRoute, (c) => {
  throw new Error('Not implemented')
})
