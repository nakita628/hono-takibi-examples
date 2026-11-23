import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountRoute, getHtmlRoute, getSelectedMultipleRoute, getSelectedRoute } from './routes'
import {
  getAccountRouteHandler,
  getHtmlRouteHandler,
  getSelectedMultipleRouteHandler,
  getSelectedRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getHtmlRoute, getHtmlRouteHandler)
  .openapi(getSelectedRoute, getSelectedRouteHandler)
  .openapi(getSelectedMultipleRoute, getSelectedMultipleRouteHandler)

export default app
