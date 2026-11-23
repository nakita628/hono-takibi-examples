import type { RouteHandler } from '@hono/zod-openapi'
import type { getUtilityV1HealthHeartbeatRoute, getUtilityV1HealthThreadinfoRoute } from '../routes'

export const getUtilityV1HealthHeartbeatRouteHandler: RouteHandler<
  typeof getUtilityV1HealthHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUtilityV1HealthThreadinfoRouteHandler: RouteHandler<
  typeof getUtilityV1HealthThreadinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
