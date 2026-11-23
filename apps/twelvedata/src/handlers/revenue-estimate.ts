import { OpenAPIHono } from '@hono/zod-openapi'
import { getRevenueEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const revenueEstimateHandler = app.openapi(getRevenueEstimateRoute, (c) => {
  throw new Error('Not implemented')
})
