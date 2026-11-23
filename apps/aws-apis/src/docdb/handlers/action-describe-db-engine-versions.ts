import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBEngineVersionsRoute,
  postActionDescribeDBEngineVersionsRoute,
} from '../routes'

export const getActionDescribeDBEngineVersionsRouteHandler: RouteHandler<
  typeof getActionDescribeDBEngineVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBEngineVersionsRouteHandler: RouteHandler<
  typeof postActionDescribeDBEngineVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
