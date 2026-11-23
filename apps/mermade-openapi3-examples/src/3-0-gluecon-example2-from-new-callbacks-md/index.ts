import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteHooksIdRoute, postHooksRoute } from './routes'
import { deleteHooksIdRouteHandler, postHooksRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHooksRoute, postHooksRouteHandler)
  .openapi(deleteHooksIdRoute, deleteHooksIdRouteHandler)

export default app
