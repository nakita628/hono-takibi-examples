import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmsRoute, postVoiceRoute } from './routes'
import { postSmsRouteHandler, postVoiceRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSmsRoute, postSmsRouteHandler)
  .openapi(postVoiceRoute, postVoiceRouteHandler)

export default app
