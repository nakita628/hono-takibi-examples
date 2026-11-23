import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGetDeploymentsRoute,
  postGetDeviceRegistrationRoute,
  postSendHeartbeatRoute,
} from './routes'
import {
  postGetDeploymentsRouteHandler,
  postGetDeviceRegistrationRouteHandler,
  postSendHeartbeatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGetDeploymentsRoute, postGetDeploymentsRouteHandler)
  .openapi(postGetDeviceRegistrationRoute, postGetDeviceRegistrationRouteHandler)
  .openapi(postSendHeartbeatRoute, postSendHeartbeatRouteHandler)

export default app
