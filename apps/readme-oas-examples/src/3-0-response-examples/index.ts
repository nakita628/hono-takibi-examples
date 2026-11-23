import { OpenAPIHono } from '@hono/zod-openapi'
import { getExampleRoute, getExamplesRoute } from './routes'
import { getExampleRouteHandler, getExamplesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getExampleRoute, getExampleRouteHandler)
  .openapi(getExamplesRoute, getExamplesRouteHandler)

export default app
