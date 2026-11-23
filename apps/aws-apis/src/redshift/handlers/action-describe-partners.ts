import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribePartnersRoute, postActionDescribePartnersRoute } from '../routes'

export const getActionDescribePartnersRouteHandler: RouteHandler<
  typeof getActionDescribePartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePartnersRouteHandler: RouteHandler<
  typeof postActionDescribePartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
