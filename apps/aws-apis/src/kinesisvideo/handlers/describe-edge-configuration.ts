import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeEdgeConfigurationRoute } from '../routes'

export const postDescribeEdgeConfigurationRouteHandler: RouteHandler<
  typeof postDescribeEdgeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
