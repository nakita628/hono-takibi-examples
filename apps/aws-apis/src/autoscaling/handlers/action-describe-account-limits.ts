import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAccountLimitsRoute,
  postActionDescribeAccountLimitsRoute,
} from '../routes'

export const getActionDescribeAccountLimitsRouteHandler: RouteHandler<
  typeof getActionDescribeAccountLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAccountLimitsRouteHandler: RouteHandler<
  typeof postActionDescribeAccountLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
