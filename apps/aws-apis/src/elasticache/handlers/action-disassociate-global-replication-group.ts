import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateGlobalReplicationGroupRoute,
  postActionDisassociateGlobalReplicationGroupRoute,
} from '../routes'

export const getActionDisassociateGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof getActionDisassociateGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateGlobalReplicationGroupRouteHandler: RouteHandler<
  typeof postActionDisassociateGlobalReplicationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
