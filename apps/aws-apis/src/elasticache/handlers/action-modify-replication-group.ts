import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyReplicationGroupRoute,
  postActionModifyReplicationGroupRoute,
} from '../routes'

export const getActionModifyReplicationGroupRouteHandler: RouteHandler<
  typeof getActionModifyReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyReplicationGroupRouteHandler: RouteHandler<
  typeof postActionModifyReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
