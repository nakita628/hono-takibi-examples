import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoggingStatusRoute,
  postActionDescribeLoggingStatusRoute,
} from '../routes'

export const getActionDescribeLoggingStatusRouteHandler: RouteHandler<
  typeof getActionDescribeLoggingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoggingStatusRouteHandler: RouteHandler<
  typeof postActionDescribeLoggingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
