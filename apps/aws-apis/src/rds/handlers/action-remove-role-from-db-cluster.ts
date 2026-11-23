import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveRoleFromDBClusterRoute,
  postActionRemoveRoleFromDBClusterRoute,
} from '../routes'

export const getActionRemoveRoleFromDBClusterRouteHandler: RouteHandler<
  typeof getActionRemoveRoleFromDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveRoleFromDBClusterRouteHandler: RouteHandler<
  typeof postActionRemoveRoleFromDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
