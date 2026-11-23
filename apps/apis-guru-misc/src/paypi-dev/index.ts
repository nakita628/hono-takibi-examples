import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckCodeRoute, postSendCodeRoute } from './routes'
import { postCheckCodeRouteHandler, postSendCodeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCheckCodeRoute, postCheckCodeRouteHandler)
  .openapi(postSendCodeRoute, postSendCodeRouteHandler)

export default app
