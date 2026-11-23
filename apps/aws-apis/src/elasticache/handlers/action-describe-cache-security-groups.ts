import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheSecurityGroupsRoute,
  postActionDescribeCacheSecurityGroupsRoute,
} from '../routes'

export const getActionDescribeCacheSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeCacheSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeCacheSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
