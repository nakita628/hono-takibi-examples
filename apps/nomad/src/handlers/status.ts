import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusLeaderRoute, getStatusPeersRoute } from '../routes'

export const getStatusLeaderRouteHandler: RouteHandler<typeof getStatusLeaderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusPeersRouteHandler: RouteHandler<typeof getStatusPeersRoute> = async (c) => {
  throw new Error('Not implemented')
}
