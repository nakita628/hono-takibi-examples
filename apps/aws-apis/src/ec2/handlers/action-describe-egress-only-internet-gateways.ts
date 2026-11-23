import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEgressOnlyInternetGatewaysRoute,
  postActionDescribeEgressOnlyInternetGatewaysRoute,
} from '../routes'

export const getActionDescribeEgressOnlyInternetGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeEgressOnlyInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEgressOnlyInternetGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeEgressOnlyInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
