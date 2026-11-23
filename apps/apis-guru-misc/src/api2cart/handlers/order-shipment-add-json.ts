import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderShipmentAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderShipmentAddJsonHandler = app.openapi(postOrderShipmentAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
