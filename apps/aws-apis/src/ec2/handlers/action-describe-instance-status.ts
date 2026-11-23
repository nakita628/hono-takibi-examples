import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceStatusRoute,
  postActionDescribeInstanceStatusRoute,
} from '../routes'

export const getActionDescribeInstanceStatusRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceStatusRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
