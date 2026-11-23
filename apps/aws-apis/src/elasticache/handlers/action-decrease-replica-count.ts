import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDecreaseReplicaCountRoute,
  postActionDecreaseReplicaCountRoute,
} from '../routes'

export const getActionDecreaseReplicaCountRouteHandler: RouteHandler<
  typeof getActionDecreaseReplicaCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDecreaseReplicaCountRouteHandler: RouteHandler<
  typeof postActionDecreaseReplicaCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
