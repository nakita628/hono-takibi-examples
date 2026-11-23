import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHypernymsRoute,
  getHyponymsRoute,
  getInflectionsRoute,
  getLmFamilyRoute,
  getSensesRoute,
  getValuesRoute,
} from './routes'
import {
  getHypernymsRouteHandler,
  getHyponymsRouteHandler,
  getInflectionsRouteHandler,
  getLmFamilyRouteHandler,
  getSensesRouteHandler,
  getValuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHypernymsRoute, getHypernymsRouteHandler)
  .openapi(getHyponymsRoute, getHyponymsRouteHandler)
  .openapi(getInflectionsRoute, getInflectionsRouteHandler)
  .openapi(getLmFamilyRoute, getLmFamilyRouteHandler)
  .openapi(getSensesRoute, getSensesRouteHandler)
  .openapi(getValuesRoute, getValuesRouteHandler)

export default app
