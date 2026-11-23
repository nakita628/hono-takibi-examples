import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPromoteReadReplicaDBClusterRoute,
  postActionPromoteReadReplicaDBClusterRoute,
} from '../routes'

export const getActionPromoteReadReplicaDBClusterRouteHandler: RouteHandler<
  typeof getActionPromoteReadReplicaDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPromoteReadReplicaDBClusterRouteHandler: RouteHandler<
  typeof postActionPromoteReadReplicaDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
