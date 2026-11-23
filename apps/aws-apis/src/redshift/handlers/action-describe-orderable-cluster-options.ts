import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeOrderableClusterOptionsRoute,
  postActionDescribeOrderableClusterOptionsRoute,
} from '../routes'

export const getActionDescribeOrderableClusterOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeOrderableClusterOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeOrderableClusterOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeOrderableClusterOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
