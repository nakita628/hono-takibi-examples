import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesMessageIdRoute, postMessagesMessageIdRoute } from './routes'
import { getMessagesMessageIdRouteHandler, postMessagesMessageIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMessagesMessageIdRoute, getMessagesMessageIdRouteHandler)
  .openapi(postMessagesMessageIdRoute, postMessagesMessageIdRouteHandler)

export default app
