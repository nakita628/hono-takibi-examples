import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLocalGatewaysRoute,
  postActionDescribeLocalGatewaysRoute,
} from '../routes'

export const getActionDescribeLocalGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeLocalGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLocalGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeLocalGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
