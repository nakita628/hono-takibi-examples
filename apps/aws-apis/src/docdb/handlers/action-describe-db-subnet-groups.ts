import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBSubnetGroupsRoute,
  postActionDescribeDBSubnetGroupsRoute,
} from '../routes'

export const getActionDescribeDBSubnetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBSubnetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
