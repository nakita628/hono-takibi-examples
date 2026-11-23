import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVerifiedAccessGroupsRoute,
  postActionDescribeVerifiedAccessGroupsRoute,
} from '../routes'

export const getActionDescribeVerifiedAccessGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeVerifiedAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVerifiedAccessGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeVerifiedAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
