import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeLaunchConfigurationTemplatesRoute } from '../routes'

export const postDescribeLaunchConfigurationTemplatesRouteHandler: RouteHandler<
  typeof postDescribeLaunchConfigurationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
