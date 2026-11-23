import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTargetGroupsRoute,
  postActionDescribeTargetGroupsRoute,
} from '../routes'

export const getActionDescribeTargetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTargetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
