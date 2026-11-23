import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRebalanceSlotsInGlobalReplicationGroupRoute,
  postActionRebalanceSlotsInGlobalReplicationGroupRoute,
} from '../routes'

export const getActionRebalanceSlotsInGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionRebalanceSlotsInGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebalanceSlotsInGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionRebalanceSlotsInGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
