import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEnvironmentHealthRoute,
  postActionDescribeEnvironmentHealthRoute,
} from '../routes'

export const getActionDescribeEnvironmentHealthRouteHandler: RouteHandler<
  typeof getActionDescribeEnvironmentHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEnvironmentHealthRouteHandler: RouteHandler<
  typeof postActionDescribeEnvironmentHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
