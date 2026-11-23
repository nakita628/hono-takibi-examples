import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScalingParametersRoute,
  postActionDescribeScalingParametersRoute,
} from '../routes'

export const getActionDescribeScalingParametersRouteHandler: RouteHandler<
  typeof getActionDescribeScalingParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScalingParametersRouteHandler: RouteHandler<
  typeof postActionDescribeScalingParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
