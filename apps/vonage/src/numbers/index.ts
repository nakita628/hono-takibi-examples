import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountNumbersRoute,
  getNumberSearchRoute,
  postNumberBuyRoute,
  postNumberCancelRoute,
  postNumberUpdateRoute,
} from './routes'
import {
  getAccountNumbersRouteHandler,
  getNumberSearchRouteHandler,
  postNumberBuyRouteHandler,
  postNumberCancelRouteHandler,
  postNumberUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountNumbersRoute, getAccountNumbersRouteHandler)
  .openapi(postNumberBuyRoute, postNumberBuyRouteHandler)
  .openapi(postNumberCancelRoute, postNumberCancelRouteHandler)
  .openapi(getNumberSearchRoute, getNumberSearchRouteHandler)
  .openapi(postNumberUpdateRoute, postNumberUpdateRouteHandler)

export default app
