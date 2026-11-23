import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEnvironmentManagedActionsRoute,
  postActionDescribeEnvironmentManagedActionsRoute,
} from '../routes'

export const getActionDescribeEnvironmentManagedActionsRouteHandler: RouteHandler<
  typeof getActionDescribeEnvironmentManagedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEnvironmentManagedActionsRouteHandler: RouteHandler<
  typeof postActionDescribeEnvironmentManagedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
