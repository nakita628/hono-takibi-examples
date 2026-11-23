import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeDomainsRoute, postActionDescribeDomainsRoute } from '../routes'

export const getActionDescribeDomainsRouteHandler: RouteHandler<
  typeof getActionDescribeDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDomainsRouteHandler: RouteHandler<
  typeof postActionDescribeDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
