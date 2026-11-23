import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedConnectionsIdRoute,
  getFeedConnectionsRoute,
  getStatementsRoute,
  getStatementsStatementIdRoute,
  postFeedConnectionsDeleteRequestsRoute,
  postFeedConnectionsRoute,
  postStatementsRoute,
} from './routes'
import {
  getFeedConnectionsIdRouteHandler,
  getFeedConnectionsRouteHandler,
  getStatementsRouteHandler,
  getStatementsStatementIdRouteHandler,
  postFeedConnectionsDeleteRequestsRouteHandler,
  postFeedConnectionsRouteHandler,
  postStatementsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFeedConnectionsRoute, getFeedConnectionsRouteHandler)
  .openapi(postFeedConnectionsRoute, postFeedConnectionsRouteHandler)
  .openapi(getFeedConnectionsIdRoute, getFeedConnectionsIdRouteHandler)
  .openapi(postFeedConnectionsDeleteRequestsRoute, postFeedConnectionsDeleteRequestsRouteHandler)
  .openapi(getStatementsRoute, getStatementsRouteHandler)
  .openapi(postStatementsRoute, postStatementsRouteHandler)
  .openapi(getStatementsStatementIdRoute, getStatementsStatementIdRouteHandler)

export default app
