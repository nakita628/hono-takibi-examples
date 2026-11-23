import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterDbRevisionsRoute,
  postActionDescribeClusterDbRevisionsRoute,
} from '../routes'

export const getActionDescribeClusterDbRevisionsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterDbRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterDbRevisionsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterDbRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
