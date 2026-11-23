import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionIncreaseReplicaCountRoute,
  postActionIncreaseReplicaCountRoute,
} from '../routes'

export const getActionIncreaseReplicaCountRouteHandler: RouteHandler<
  typeof getActionIncreaseReplicaCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionIncreaseReplicaCountRouteHandler: RouteHandler<
  typeof postActionIncreaseReplicaCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
