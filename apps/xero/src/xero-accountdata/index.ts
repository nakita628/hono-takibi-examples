import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountBalancesRoute,
  getAccountMovementsRoute,
  getAccountTransactionsRoute,
} from './routes'
import {
  getAccountBalancesRouteHandler,
  getAccountMovementsRouteHandler,
  getAccountTransactionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountBalancesRoute, getAccountBalancesRouteHandler)
  .openapi(getAccountMovementsRoute, getAccountMovementsRouteHandler)
  .openapi(getAccountTransactionsRoute, getAccountTransactionsRouteHandler)

export default app
