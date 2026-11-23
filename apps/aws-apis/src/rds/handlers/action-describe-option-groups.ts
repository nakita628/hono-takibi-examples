import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeOptionGroupsRoute,
  postActionDescribeOptionGroupsRoute,
} from '../routes'

export const getActionDescribeOptionGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeOptionGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeOptionGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeOptionGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
