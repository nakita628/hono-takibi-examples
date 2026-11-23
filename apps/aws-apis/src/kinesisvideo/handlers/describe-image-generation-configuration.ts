import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeImageGenerationConfigurationRoute } from '../routes'

export const postDescribeImageGenerationConfigurationRouteHandler: RouteHandler<
  typeof postDescribeImageGenerationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
