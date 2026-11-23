import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceRoute, postSendbatchRoute, postSendRoute } from './routes'
import { getBalanceRouteHandler, postSendbatchRouteHandler, postSendRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBalanceRoute, getBalanceRouteHandler)
  .openapi(postSendRoute, postSendRouteHandler)
  .openapi(postSendbatchRoute, postSendbatchRouteHandler)

export default app
