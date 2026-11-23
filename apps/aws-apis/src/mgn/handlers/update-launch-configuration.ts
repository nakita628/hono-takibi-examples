import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateLaunchConfigurationRoute } from '../routes'

export const postUpdateLaunchConfigurationRouteHandler: RouteHandler<
  typeof postUpdateLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
