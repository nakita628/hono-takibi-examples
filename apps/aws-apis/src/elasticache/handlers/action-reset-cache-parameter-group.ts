import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetCacheParameterGroupRoute,
  postActionResetCacheParameterGroupRoute,
} from '../routes'

export const getActionResetCacheParameterGroupRouteHandler: RouteHandler<
  typeof getActionResetCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetCacheParameterGroupRouteHandler: RouteHandler<
  typeof postActionResetCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
