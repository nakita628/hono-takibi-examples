import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiEventsRoute,
  getApiLogsRoute,
  getApiLogsStreamRoute,
  getHealthzRoute,
  getJsonRoute,
  getMetricsRoute,
  getOpenapiJsonRoute,
  getOpenapiYamlRoute,
  getRoute,
  postApiRunRoute,
  postCheckRoute,
} from './routes'
import {
  getApiEventsRouteHandler,
  getApiLogsRouteHandler,
  getApiLogsStreamRouteHandler,
  getHealthzRouteHandler,
  getJsonRouteHandler,
  getMetricsRouteHandler,
  getOpenapiJsonRouteHandler,
  getOpenapiYamlRouteHandler,
  getRouteHandler,
  postApiRunRouteHandler,
  postCheckRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getHealthzRoute, getHealthzRouteHandler)
  .openapi(getJsonRoute, getJsonRouteHandler)
  .openapi(getApiEventsRoute, getApiEventsRouteHandler)
  .openapi(getApiLogsRoute, getApiLogsRouteHandler)
  .openapi(getApiLogsStreamRoute, getApiLogsStreamRouteHandler)
  .openapi(getOpenapiYamlRoute, getOpenapiYamlRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(postApiRunRoute, postApiRunRouteHandler)
  .openapi(postCheckRoute, postCheckRouteHandler)
  .openapi(getRoute, getRouteHandler)

export default app
