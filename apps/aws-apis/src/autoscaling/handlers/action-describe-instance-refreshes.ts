import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceRefreshesRoute,
  postActionDescribeInstanceRefreshesRoute,
} from '../routes'

export const getActionDescribeInstanceRefreshesRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceRefreshesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceRefreshesRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceRefreshesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
