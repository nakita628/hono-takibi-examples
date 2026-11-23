import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1Games32881Route,
  getApiV1GamesRoute,
  getApiV1Players237Route,
  getApiV1PlayersRoute,
  getApiV1StatsRoute,
  getApiV1Teams1Route,
  getApiV1TeamsRoute,
} from './routes'
import {
  getApiV1Games32881RouteHandler,
  getApiV1GamesRouteHandler,
  getApiV1Players237RouteHandler,
  getApiV1PlayersRouteHandler,
  getApiV1StatsRouteHandler,
  getApiV1Teams1RouteHandler,
  getApiV1TeamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1GamesRoute, getApiV1GamesRouteHandler)
  .openapi(getApiV1Games32881Route, getApiV1Games32881RouteHandler)
  .openapi(getApiV1PlayersRoute, getApiV1PlayersRouteHandler)
  .openapi(getApiV1Players237Route, getApiV1Players237RouteHandler)
  .openapi(getApiV1StatsRoute, getApiV1StatsRouteHandler)
  .openapi(getApiV1TeamsRoute, getApiV1TeamsRouteHandler)
  .openapi(getApiV1Teams1Route, getApiV1Teams1RouteHandler)

export default app
