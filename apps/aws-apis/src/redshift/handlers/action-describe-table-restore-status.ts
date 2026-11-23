import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTableRestoreStatusRoute,
  postActionDescribeTableRestoreStatusRoute,
} from '../routes'

export const getActionDescribeTableRestoreStatusRouteHandler: RouteHandler<
  typeof getActionDescribeTableRestoreStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTableRestoreStatusRouteHandler: RouteHandler<
  typeof postActionDescribeTableRestoreStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
