import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterParametersRoute,
  postActionDescribeClusterParametersRoute,
} from '../routes'

export const getActionDescribeClusterParametersRouteHandler: RouteHandler<
  typeof getActionDescribeClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterParametersRouteHandler: RouteHandler<
  typeof postActionDescribeClusterParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
