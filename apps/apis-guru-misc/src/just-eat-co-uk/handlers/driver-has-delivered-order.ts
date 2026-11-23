import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverHasDeliveredOrderRoute } from '../routes'

const app = new OpenAPIHono()

export const driverHasDeliveredOrderHandler = app.openapi(putDriverHasDeliveredOrderRoute, (c) => {
  throw new Error('Not implemented')
})
