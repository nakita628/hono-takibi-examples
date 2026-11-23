import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInternetGatewaysRoute,
  postActionDescribeInternetGatewaysRoute,
} from '../routes'

export const getActionDescribeInternetGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInternetGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
