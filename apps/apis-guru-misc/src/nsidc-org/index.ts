import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacetsRoute,
  getOpenSearchDescriptionRoute,
  getOpenSearchRoute,
  getSuggestRoute,
} from './routes'
import {
  getFacetsRouteHandler,
  getOpenSearchDescriptionRouteHandler,
  getOpenSearchRouteHandler,
  getSuggestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFacetsRoute, getFacetsRouteHandler)
  .openapi(getOpenSearchRoute, getOpenSearchRouteHandler)
  .openapi(getOpenSearchDescriptionRoute, getOpenSearchDescriptionRouteHandler)
  .openapi(getSuggestRoute, getSuggestRouteHandler)

export default app
