import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCacheSecurityGroupRoute,
  postActionDeleteCacheSecurityGroupRoute,
} from '../routes'

export const getActionDeleteCacheSecurityGroupRouteHandler: RouteHandler<
  typeof getActionDeleteCacheSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCacheSecurityGroupRouteHandler: RouteHandler<
  typeof postActionDeleteCacheSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
