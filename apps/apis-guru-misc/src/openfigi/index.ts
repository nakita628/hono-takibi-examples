import { OpenAPIHono } from '@hono/zod-openapi'
import { getMappingValuesKeyRoute, postMappingRoute } from './routes'
import { getMappingValuesKeyRouteHandler, postMappingRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMappingRoute, postMappingRouteHandler)
  .openapi(getMappingValuesKeyRoute, getMappingValuesKeyRouteHandler)

export default app
