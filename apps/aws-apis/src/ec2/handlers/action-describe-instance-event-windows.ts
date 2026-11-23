import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceEventWindowsRoute,
  postActionDescribeInstanceEventWindowsRoute,
} from '../routes'

export const getActionDescribeInstanceEventWindowsRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceEventWindowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceEventWindowsRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceEventWindowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
