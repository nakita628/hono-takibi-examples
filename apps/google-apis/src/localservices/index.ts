import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountReportsSearchRoute, getV1DetailedLeadReportsSearchRoute } from './routes'
import {
  getV1AccountReportsSearchRouteHandler,
  getV1DetailedLeadReportsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AccountReportsSearchRoute, getV1AccountReportsSearchRouteHandler)
  .openapi(getV1DetailedLeadReportsSearchRoute, getV1DetailedLeadReportsSearchRouteHandler)

export default app
