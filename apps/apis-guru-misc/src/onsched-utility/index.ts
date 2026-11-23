import { OpenAPIHono } from '@hono/zod-openapi'
import { getUtilityV1HealthHeartbeatRoute, getUtilityV1HealthThreadinfoRoute } from './routes'
import {
  getUtilityV1HealthHeartbeatRouteHandler,
  getUtilityV1HealthThreadinfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUtilityV1HealthHeartbeatRoute, getUtilityV1HealthHeartbeatRouteHandler)
  .openapi(getUtilityV1HealthThreadinfoRoute, getUtilityV1HealthThreadinfoRouteHandler)

export default app
