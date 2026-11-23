import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeAddressesRoute, postActionDescribeAddressesRoute } from '../routes'

export const getActionDescribeAddressesRouteHandler: RouteHandler<
  typeof getActionDescribeAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAddressesRouteHandler: RouteHandler<
  typeof postActionDescribeAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
