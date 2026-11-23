import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEnvironmentResourcesRoute,
  postActionDescribeEnvironmentResourcesRoute,
} from '../routes'

export const getActionDescribeEnvironmentResourcesRouteHandler: RouteHandler<
  typeof getActionDescribeEnvironmentResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEnvironmentResourcesRouteHandler: RouteHandler<
  typeof postActionDescribeEnvironmentResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
