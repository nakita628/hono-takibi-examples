import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTargetGroupAttributesRoute,
  postActionDescribeTargetGroupAttributesRoute,
} from '../routes'

export const getActionDescribeTargetGroupAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeTargetGroupAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTargetGroupAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeTargetGroupAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
