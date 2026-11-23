import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeMediaStorageConfigurationRoute } from '../routes'

export const postDescribeMediaStorageConfigurationRouteHandler: RouteHandler<
  typeof postDescribeMediaStorageConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
