import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiLogisticsPvtShippingCalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const slaHandler = app.openapi(postApiLogisticsPvtShippingCalculateRoute, (c) => {
  throw new Error('Not implemented')
})
