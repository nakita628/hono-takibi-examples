import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNatGatewaysRoute,
  postActionDescribeNatGatewaysRoute,
} from '../routes'

export const getActionDescribeNatGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeNatGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNatGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeNatGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
