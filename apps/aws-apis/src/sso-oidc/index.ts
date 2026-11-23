import { OpenAPIHono } from '@hono/zod-openapi'
import { postClientRegisterRoute, postDeviceAuthorizationRoute, postTokenRoute } from './routes'
import {
  postClientRegisterRouteHandler,
  postDeviceAuthorizationRouteHandler,
  postTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(postClientRegisterRoute, postClientRegisterRouteHandler)
  .openapi(postDeviceAuthorizationRoute, postDeviceAuthorizationRouteHandler)

export default app
