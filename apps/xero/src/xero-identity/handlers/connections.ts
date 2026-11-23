import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteConnectionsIdRoute, getConnectionsRoute } from '../routes'

export const getConnectionsRouteHandler: RouteHandler<typeof getConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectionsIdRouteHandler: RouteHandler<
  typeof deleteConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
