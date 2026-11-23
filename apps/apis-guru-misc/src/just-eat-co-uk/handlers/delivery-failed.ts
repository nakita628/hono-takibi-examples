import { OpenAPIHono } from '@hono/zod-openapi'
import { putDeliveryFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const deliveryFailedHandler = app.openapi(putDeliveryFailedRoute, (c) => {
  throw new Error('Not implemented')
})
