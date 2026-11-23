import { OpenAPIHono } from '@hono/zod-openapi'
import { postEvents202609SendBatchRoute, postEvents202609SendRoute } from './routes'
import { postEvents202609SendBatchRouteHandler, postEvents202609SendRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEvents202609SendRoute, postEvents202609SendRouteHandler)
  .openapi(postEvents202609SendBatchRoute, postEvents202609SendBatchRouteHandler)

export default app
