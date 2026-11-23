import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPromoteReadReplicaRoute, postActionPromoteReadReplicaRoute } from '../routes'

export const getActionPromoteReadReplicaRouteHandler: RouteHandler<
  typeof getActionPromoteReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPromoteReadReplicaRouteHandler: RouteHandler<
  typeof postActionPromoteReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
