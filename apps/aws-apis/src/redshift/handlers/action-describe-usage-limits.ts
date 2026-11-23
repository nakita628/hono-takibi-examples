import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeUsageLimitsRoute,
  postActionDescribeUsageLimitsRoute,
} from '../routes'

export const getActionDescribeUsageLimitsRouteHandler: RouteHandler<
  typeof getActionDescribeUsageLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeUsageLimitsRouteHandler: RouteHandler<
  typeof postActionDescribeUsageLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
