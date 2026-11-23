import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionFailoverGlobalReplicationGroupRoute,
  postActionFailoverGlobalReplicationGroupRoute,
} from '../routes'

export const getActionFailoverGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionFailoverGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionFailoverGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionFailoverGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
