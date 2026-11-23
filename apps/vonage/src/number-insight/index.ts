import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdvancedAsyncFormatRoute,
  getAdvancedFormatRoute,
  getBasicFormatRoute,
  getStandardFormatRoute,
} from './routes'
import {
  getAdvancedAsyncFormatRouteHandler,
  getAdvancedFormatRouteHandler,
  getBasicFormatRouteHandler,
  getStandardFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdvancedAsyncFormatRoute, getAdvancedAsyncFormatRouteHandler)
  .openapi(getAdvancedFormatRoute, getAdvancedFormatRouteHandler)
  .openapi(getBasicFormatRoute, getBasicFormatRouteHandler)
  .openapi(getStandardFormatRoute, getStandardFormatRouteHandler)

export default app
