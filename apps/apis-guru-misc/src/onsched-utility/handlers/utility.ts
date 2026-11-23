import { OpenAPIHono } from '@hono/zod-openapi'
import { getUtilityV1HealthHeartbeatRoute, getUtilityV1HealthThreadinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(getUtilityV1HealthHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUtilityV1HealthThreadinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
