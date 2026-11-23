import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAutoScalingGroupsRoute,
  postActionDescribeAutoScalingGroupsRoute,
} from '../routes'

export const getActionDescribeAutoScalingGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeAutoScalingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAutoScalingGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeAutoScalingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
