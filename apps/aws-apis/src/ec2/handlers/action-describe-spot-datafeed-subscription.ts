import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotDatafeedSubscriptionRoute,
  postActionDescribeSpotDatafeedSubscriptionRoute,
} from '../routes'

export const getActionDescribeSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof getActionDescribeSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof postActionDescribeSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
