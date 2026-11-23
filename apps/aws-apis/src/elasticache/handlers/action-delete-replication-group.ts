import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteReplicationGroupRoute,
  postActionDeleteReplicationGroupRoute,
} from '../routes'

export const getActionDeleteReplicationGroupRouteHandler: RouteHandler<
  typeof getActionDeleteReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteReplicationGroupRouteHandler: RouteHandler<
  typeof postActionDeleteReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
