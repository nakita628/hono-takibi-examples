import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GroundhogsRoute,
  getApiV1GroundhogsSlugRoute,
  getApiV1PredictionsRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from './routes'
import {
  getApiV1GroundhogsRouteHandler,
  getApiV1GroundhogsSlugRouteHandler,
  getApiV1PredictionsRouteHandler,
  getApiV1RouteHandler,
  getApiV1SpecRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1Route, getApiV1RouteHandler)
  .openapi(getApiV1GroundhogsRoute, getApiV1GroundhogsRouteHandler)
  .openapi(getApiV1GroundhogsSlugRoute, getApiV1GroundhogsSlugRouteHandler)
  .openapi(getApiV1PredictionsRoute, getApiV1PredictionsRouteHandler)
  .openapi(getApiV1SpecRoute, getApiV1SpecRouteHandler)

export default app
