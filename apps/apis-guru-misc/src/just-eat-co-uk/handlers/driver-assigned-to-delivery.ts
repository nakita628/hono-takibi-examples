import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverAssignedToDeliveryRoute } from '../routes'

const app = new OpenAPIHono()

export const driverAssignedToDeliveryHandler = app.openapi(
  putDriverAssignedToDeliveryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
