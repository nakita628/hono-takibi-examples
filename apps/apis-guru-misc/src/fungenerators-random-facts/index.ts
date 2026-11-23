import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFactRoute,
  getFactCategoriesRoute,
  getFactFodCategoriesRoute,
  getFactFodRoute,
  getFactNumbersRoute,
  getFactOnthisdayBornRoute,
  getFactOnthisdayDiedRoute,
  getFactOnthisdayEventRoute,
  getFactRandomRoute,
  getFactRoute,
  getFactSearchRoute,
  putFactRoute,
} from './routes'
import {
  deleteFactRouteHandler,
  getFactCategoriesRouteHandler,
  getFactFodCategoriesRouteHandler,
  getFactFodRouteHandler,
  getFactNumbersRouteHandler,
  getFactOnthisdayBornRouteHandler,
  getFactOnthisdayDiedRouteHandler,
  getFactOnthisdayEventRouteHandler,
  getFactRandomRouteHandler,
  getFactRouteHandler,
  getFactSearchRouteHandler,
  putFactRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteFactRoute, deleteFactRouteHandler)
  .openapi(getFactRoute, getFactRouteHandler)
  .openapi(putFactRoute, putFactRouteHandler)
  .openapi(getFactCategoriesRoute, getFactCategoriesRouteHandler)
  .openapi(getFactFodRoute, getFactFodRouteHandler)
  .openapi(getFactFodCategoriesRoute, getFactFodCategoriesRouteHandler)
  .openapi(getFactNumbersRoute, getFactNumbersRouteHandler)
  .openapi(getFactOnthisdayBornRoute, getFactOnthisdayBornRouteHandler)
  .openapi(getFactOnthisdayDiedRoute, getFactOnthisdayDiedRouteHandler)
  .openapi(getFactOnthisdayEventRoute, getFactOnthisdayEventRouteHandler)
  .openapi(getFactRandomRoute, getFactRandomRouteHandler)
  .openapi(getFactSearchRoute, getFactSearchRouteHandler)

export default app
