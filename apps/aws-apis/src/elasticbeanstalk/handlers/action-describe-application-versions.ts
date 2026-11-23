import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeApplicationVersionsRoute,
  postActionDescribeApplicationVersionsRoute,
} from '../routes'

export const getActionDescribeApplicationVersionsRouteHandler: RouteHandler<
  typeof getActionDescribeApplicationVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeApplicationVersionsRouteHandler: RouteHandler<
  typeof postActionDescribeApplicationVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
