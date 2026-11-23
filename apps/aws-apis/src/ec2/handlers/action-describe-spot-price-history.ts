import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotPriceHistoryRoute,
  postActionDescribeSpotPriceHistoryRoute,
} from '../routes'

export const getActionDescribeSpotPriceHistoryRouteHandler: RouteHandler<
  typeof getActionDescribeSpotPriceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotPriceHistoryRouteHandler: RouteHandler<
  typeof postActionDescribeSpotPriceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
