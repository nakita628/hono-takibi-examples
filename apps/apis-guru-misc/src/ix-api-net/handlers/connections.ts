import type { RouteHandler } from '@hono/zod-openapi'
import type { getConnectionsIdRoute, getConnectionsRoute } from '../routes'

export const getConnectionsRouteHandler: RouteHandler<typeof getConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsIdRouteHandler: RouteHandler<typeof getConnectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
