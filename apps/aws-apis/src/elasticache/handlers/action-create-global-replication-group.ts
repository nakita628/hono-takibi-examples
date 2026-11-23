import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateGlobalReplicationGroupRoute,
  postActionCreateGlobalReplicationGroupRoute,
} from '../routes'

export const getActionCreateGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionCreateGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionCreateGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
