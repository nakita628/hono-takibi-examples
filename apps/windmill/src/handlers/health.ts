import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthDetailedRoute, getHealthStatusRoute } from '../routes'

export const getHealthStatusRouteHandler: RouteHandler<typeof getHealthStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthDetailedRouteHandler: RouteHandler<typeof getHealthDetailedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
