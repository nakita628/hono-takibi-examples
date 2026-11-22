import { OpenAPIHono } from '@hono/zod-openapi'
import { getCostEstimationRoute, putCostEstimationRoute } from '../routes'

const app = new OpenAPIHono()

export const costEstimationHandler = app
  .openapi(getCostEstimationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCostEstimationRoute, (c) => {
    throw new Error('Not implemented')
  })
