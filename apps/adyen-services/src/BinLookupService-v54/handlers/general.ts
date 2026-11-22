import { OpenAPIHono } from '@hono/zod-openapi'
import { postGet3dsAvailabilityRoute, postGetCostEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postGet3dsAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetCostEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
