import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingBooleansRoute,
  getAnythingJsonschemaFormatsRoute,
  getAnythingNumbersRoute,
  getAnythingOasFormatsRoute,
  getAnythingStringsRoute,
} from './routes'
import {
  getAnythingBooleansRouteHandler,
  getAnythingJsonschemaFormatsRouteHandler,
  getAnythingNumbersRouteHandler,
  getAnythingOasFormatsRouteHandler,
  getAnythingStringsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnythingNumbersRoute, getAnythingNumbersRouteHandler)
  .openapi(getAnythingStringsRoute, getAnythingStringsRouteHandler)
  .openapi(getAnythingJsonschemaFormatsRoute, getAnythingJsonschemaFormatsRouteHandler)
  .openapi(getAnythingOasFormatsRoute, getAnythingOasFormatsRouteHandler)
  .openapi(getAnythingBooleansRoute, getAnythingBooleansRouteHandler)

export default app
