import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceRoute, getValidateBasicRoute, getValidateRoute } from './routes'
import {
  getBalanceRouteHandler,
  getValidateBasicRouteHandler,
  getValidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBalanceRoute, getBalanceRouteHandler)
  .openapi(getValidateRoute, getValidateRouteHandler)
  .openapi(getValidateBasicRoute, getValidateBasicRouteHandler)

export default app
