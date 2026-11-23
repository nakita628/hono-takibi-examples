import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarningsEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const earningsEstimateHandler = app.openapi(getEarningsEstimateRoute, (c) => {
  throw new Error('Not implemented')
})
