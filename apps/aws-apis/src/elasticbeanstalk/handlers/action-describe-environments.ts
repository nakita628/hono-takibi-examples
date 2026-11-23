import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEnvironmentsRoute,
  postActionDescribeEnvironmentsRoute,
} from '../routes'

export const getActionDescribeEnvironmentsRouteHandler: RouteHandler<
  typeof getActionDescribeEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEnvironmentsRouteHandler: RouteHandler<
  typeof postActionDescribeEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
