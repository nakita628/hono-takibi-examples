import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetCostEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const getCostEstimateHandler = app.openapi(postGetCostEstimateRoute, (c) => {
  throw new Error('Not implemented')
})
