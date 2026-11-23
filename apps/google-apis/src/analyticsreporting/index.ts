import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ReportsBatchGetRoute, postV4UserActivitySearchRoute } from './routes'
import { postV4ReportsBatchGetRouteHandler, postV4UserActivitySearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV4ReportsBatchGetRoute, postV4ReportsBatchGetRouteHandler)
  .openapi(postV4UserActivitySearchRoute, postV4UserActivitySearchRouteHandler)

export default app
