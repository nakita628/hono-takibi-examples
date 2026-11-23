import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdaptersNameRoute,
  deleteToolsNameRoute,
  getAdaptersNameLogsRoute,
  getAdaptersNameRoute,
  getAdaptersNameStatusRoute,
  getAdaptersRoute,
  getToolsNameLogsRoute,
  getToolsNameRoute,
  getToolsNameStatusRoute,
  getToolsRoute,
  postAdaptersNameMcpRoute,
  postAdaptersRoute,
  postMcpRoute,
  postToolsRoute,
  putAdaptersNameRoute,
  putToolsNameRoute,
} from './routes'
import {
  deleteAdaptersNameRouteHandler,
  deleteToolsNameRouteHandler,
  getAdaptersNameLogsRouteHandler,
  getAdaptersNameRouteHandler,
  getAdaptersNameStatusRouteHandler,
  getAdaptersRouteHandler,
  getToolsNameLogsRouteHandler,
  getToolsNameRouteHandler,
  getToolsNameStatusRouteHandler,
  getToolsRouteHandler,
  postAdaptersNameMcpRouteHandler,
  postAdaptersRouteHandler,
  postMcpRouteHandler,
  postToolsRouteHandler,
  putAdaptersNameRouteHandler,
  putToolsNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAdaptersRoute, postAdaptersRouteHandler)
  .openapi(getAdaptersRoute, getAdaptersRouteHandler)
  .openapi(getAdaptersNameRoute, getAdaptersNameRouteHandler)
  .openapi(putAdaptersNameRoute, putAdaptersNameRouteHandler)
  .openapi(deleteAdaptersNameRoute, deleteAdaptersNameRouteHandler)
  .openapi(getAdaptersNameStatusRoute, getAdaptersNameStatusRouteHandler)
  .openapi(getAdaptersNameLogsRoute, getAdaptersNameLogsRouteHandler)
  .openapi(postToolsRoute, postToolsRouteHandler)
  .openapi(getToolsRoute, getToolsRouteHandler)
  .openapi(getToolsNameRoute, getToolsNameRouteHandler)
  .openapi(putToolsNameRoute, putToolsNameRouteHandler)
  .openapi(deleteToolsNameRoute, deleteToolsNameRouteHandler)
  .openapi(getToolsNameStatusRoute, getToolsNameStatusRouteHandler)
  .openapi(getToolsNameLogsRoute, getToolsNameLogsRouteHandler)
  .openapi(postMcpRoute, postMcpRouteHandler)
  .openapi(postAdaptersNameMcpRoute, postAdaptersNameMcpRouteHandler)

export default app
