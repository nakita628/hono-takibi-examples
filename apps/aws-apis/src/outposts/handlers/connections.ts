import type { RouteHandler } from '@hono/zod-openapi'
import type { getConnectionsConnectionIdRoute, postConnectionsRoute } from '../routes'

export const getConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof getConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionsRouteHandler: RouteHandler<typeof postConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
