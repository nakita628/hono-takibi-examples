import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteGlobalReplicationGroupRoute,
  postActionDeleteGlobalReplicationGroupRoute,
} from '../routes'

export const getActionDeleteGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionDeleteGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionDeleteGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
