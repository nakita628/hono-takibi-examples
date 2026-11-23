import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi10ProgramsRoute, postApi10CalculateRoute } from './routes'
import { getApi10ProgramsRouteHandler, postApi10CalculateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApi10CalculateRoute, postApi10CalculateRouteHandler)
  .openapi(getApi10ProgramsRoute, getApi10ProgramsRouteHandler)

export default app
