import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchV1FieldsRoute, getSearchV1OrganicRoute, getSearchV1ScrapeRoute } from './routes'
import {
  getSearchV1FieldsRouteHandler,
  getSearchV1OrganicRouteHandler,
  getSearchV1ScrapeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSearchV1FieldsRoute, getSearchV1FieldsRouteHandler)
  .openapi(getSearchV1OrganicRoute, getSearchV1OrganicRouteHandler)
  .openapi(getSearchV1ScrapeRoute, getSearchV1ScrapeRouteHandler)

export default app
