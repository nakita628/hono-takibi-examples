import { OpenAPIHono } from '@hono/zod-openapi'
import { getVrpSolutionJobIdRoute, postVrpOptimizeRoute, postVrpRoute } from '../routes'

const app = new OpenAPIHono()

export const routeOptimizationAPIHandler = app
  .openapi(postVrpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVrpOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrpSolutionJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
