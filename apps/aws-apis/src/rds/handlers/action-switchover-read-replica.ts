import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSwitchoverReadReplicaRoute,
  postActionSwitchoverReadReplicaRoute,
} from '../routes'

export const getActionSwitchoverReadReplicaRouteHandler: RouteHandler<
  typeof getActionSwitchoverReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSwitchoverReadReplicaRouteHandler: RouteHandler<
  typeof postActionSwitchoverReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
