import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReportingBalancesRoute, getV1ReportingTransactionsRoute } from './routes'
import {
  getV1ReportingBalancesRouteHandler,
  getV1ReportingTransactionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ReportingTransactionsRoute, getV1ReportingTransactionsRouteHandler)
  .openapi(getV1ReportingBalancesRoute, getV1ReportingBalancesRouteHandler)

export default app
