import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountRoute, postImproveRoute, postRemovebgRoute } from './routes'
import {
  getAccountRouteHandler,
  postImproveRouteHandler,
  postRemovebgRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(postImproveRoute, postImproveRouteHandler)
  .openapi(postRemovebgRoute, postRemovebgRouteHandler)

export default app
