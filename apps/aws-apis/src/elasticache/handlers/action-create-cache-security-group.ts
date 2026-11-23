import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCacheSecurityGroupRoute,
  postActionCreateCacheSecurityGroupRoute,
} from '../routes'

export const getActionCreateCacheSecurityGroupRouteHandler: RouteHandler<
  typeof getActionCreateCacheSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCacheSecurityGroupRouteHandler: RouteHandler<
  typeof postActionCreateCacheSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
