import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerInfoRoute, getServerPingRoute } from '../routes'

export const getServerInfoRouteHandler: RouteHandler<typeof getServerInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerPingRouteHandler: RouteHandler<typeof getServerPingRoute> = async (c) => {
  throw new Error('Not implemented')
}
