import type { RouteHandler } from '@hono/zod-openapi'
import type { getIsAlivePingRoute, getIsAliveVerRoute } from '../routes'

export const getIsAlivePingRouteHandler: RouteHandler<typeof getIsAlivePingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIsAliveVerRouteHandler: RouteHandler<typeof getIsAliveVerRoute> = async (c) => {
  throw new Error('Not implemented')
}
