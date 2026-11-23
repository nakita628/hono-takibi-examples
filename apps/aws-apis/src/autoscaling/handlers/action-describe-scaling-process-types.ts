import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScalingProcessTypesRoute,
  postActionDescribeScalingProcessTypesRoute,
} from '../routes'

export const getActionDescribeScalingProcessTypesRouteHandler: RouteHandler<
  typeof getActionDescribeScalingProcessTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScalingProcessTypesRouteHandler: RouteHandler<
  typeof postActionDescribeScalingProcessTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
