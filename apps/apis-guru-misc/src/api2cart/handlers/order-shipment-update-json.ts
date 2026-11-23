import { OpenAPIHono } from '@hono/zod-openapi'
import { putOrderShipmentUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentUpdateJsonHandler = app.openapi(putOrderShipmentUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
