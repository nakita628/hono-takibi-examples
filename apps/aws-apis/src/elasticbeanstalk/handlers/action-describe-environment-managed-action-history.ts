import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEnvironmentManagedActionHistoryRoute,
  postActionDescribeEnvironmentManagedActionHistoryRoute,
} from '../routes'

export const getActionDescribeEnvironmentManagedActionHistoryRouteHandler: RouteHandler<
  typeof getActionDescribeEnvironmentManagedActionHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEnvironmentManagedActionHistoryRouteHandler: RouteHandler<
  typeof postActionDescribeEnvironmentManagedActionHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
