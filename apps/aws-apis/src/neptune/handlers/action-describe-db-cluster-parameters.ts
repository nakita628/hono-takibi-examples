import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterParametersRoute,
  postActionDescribeDBClusterParametersRoute,
} from '../routes'

export const getActionDescribeDBClusterParametersRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterParametersRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
