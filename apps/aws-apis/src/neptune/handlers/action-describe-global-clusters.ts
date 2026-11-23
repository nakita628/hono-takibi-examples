import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeGlobalClustersRoute,
  postActionDescribeGlobalClustersRoute,
} from '../routes'

export const getActionDescribeGlobalClustersRouteHandler: RouteHandler<
  typeof getActionDescribeGlobalClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeGlobalClustersRouteHandler: RouteHandler<
  typeof postActionDescribeGlobalClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
