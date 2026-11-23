import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAutoScalingInstancesRoute,
  postActionDescribeAutoScalingInstancesRoute,
} from '../routes'

export const getActionDescribeAutoScalingInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeAutoScalingInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAutoScalingInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeAutoScalingInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
