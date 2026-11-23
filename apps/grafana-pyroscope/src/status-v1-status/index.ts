import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatusBuildinfoRoute,
  getApiV1StatusConfigDefaultRoute,
  getApiV1StatusConfigDiffRoute,
  getApiV1StatusConfigRoute,
} from './routes'
import {
  getApiV1StatusBuildinfoRouteHandler,
  getApiV1StatusConfigDefaultRouteHandler,
  getApiV1StatusConfigDiffRouteHandler,
  getApiV1StatusConfigRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1StatusBuildinfoRoute, getApiV1StatusBuildinfoRouteHandler)
  .openapi(getApiV1StatusConfigRoute, getApiV1StatusConfigRouteHandler)
  .openapi(getApiV1StatusConfigDefaultRoute, getApiV1StatusConfigDefaultRouteHandler)
  .openapi(getApiV1StatusConfigDiffRoute, getApiV1StatusConfigDiffRouteHandler)

export default app
