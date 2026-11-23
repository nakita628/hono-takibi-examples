import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTransitGatewaysRoute,
  postActionDescribeTransitGatewaysRoute,
} from '../routes'

export const getActionDescribeTransitGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeTransitGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTransitGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeTransitGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
