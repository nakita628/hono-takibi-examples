import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceTypeOfferingsRoute,
  postActionDescribeInstanceTypeOfferingsRoute,
} from '../routes'

export const getActionDescribeInstanceTypeOfferingsRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceTypeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceTypeOfferingsRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceTypeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
