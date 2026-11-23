import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyGlobalReplicationGroupRoute,
  postActionModifyGlobalReplicationGroupRoute,
} from '../routes'

export const getActionModifyGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionModifyGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionModifyGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
