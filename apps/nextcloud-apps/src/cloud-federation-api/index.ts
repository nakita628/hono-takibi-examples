import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpOcmNotificationsRoute, postIndexPhpOcmSharesRoute } from './routes'
import {
  postIndexPhpOcmNotificationsRouteHandler,
  postIndexPhpOcmSharesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postIndexPhpOcmSharesRoute, postIndexPhpOcmSharesRouteHandler)
  .openapi(postIndexPhpOcmNotificationsRoute, postIndexPhpOcmNotificationsRouteHandler)

export default app
