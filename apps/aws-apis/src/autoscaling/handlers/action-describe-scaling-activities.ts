import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeScalingActivitiesRoute,
  postActionDescribeScalingActivitiesRoute,
} from '../routes'

export const getActionDescribeScalingActivitiesRouteHandler: RouteHandler<
  typeof getActionDescribeScalingActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeScalingActivitiesRouteHandler: RouteHandler<
  typeof postActionDescribeScalingActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
