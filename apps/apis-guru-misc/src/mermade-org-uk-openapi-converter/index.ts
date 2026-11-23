import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBadgeRoute,
  getConvertRoute,
  getStatusRoute,
  getValidateRoute,
  postConvertRoute,
  postValidateRoute,
} from './routes'
import {
  getBadgeRouteHandler,
  getConvertRouteHandler,
  getStatusRouteHandler,
  getValidateRouteHandler,
  postConvertRouteHandler,
  postValidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBadgeRoute, getBadgeRouteHandler)
  .openapi(getConvertRoute, getConvertRouteHandler)
  .openapi(postConvertRoute, postConvertRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getValidateRoute, getValidateRouteHandler)
  .openapi(postValidateRoute, postValidateRouteHandler)

export default app
