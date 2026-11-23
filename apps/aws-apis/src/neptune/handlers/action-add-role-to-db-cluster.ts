import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddRoleToDBClusterRoute, postActionAddRoleToDBClusterRoute } from '../routes'

export const getActionAddRoleToDBClusterRouteHandler: RouteHandler<
  typeof getActionAddRoleToDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddRoleToDBClusterRouteHandler: RouteHandler<
  typeof postActionAddRoleToDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
