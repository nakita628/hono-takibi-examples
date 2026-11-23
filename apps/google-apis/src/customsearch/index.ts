import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomsearchV1Route, getCustomsearchV1SiterestrictRoute } from './routes'
import {
  getCustomsearchV1RouteHandler,
  getCustomsearchV1SiterestrictRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCustomsearchV1Route, getCustomsearchV1RouteHandler)
  .openapi(getCustomsearchV1SiterestrictRoute, getCustomsearchV1SiterestrictRouteHandler)

export default app
