import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateReplicationGroupRoute,
  postActionCreateReplicationGroupRoute,
} from '../routes'

export const getActionCreateReplicationGroupRouteHandler: RouteHandler<
  typeof getActionCreateReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReplicationGroupRouteHandler: RouteHandler<
  typeof postActionCreateReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
