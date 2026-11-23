import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetLaunchConfigurationRoute } from '../routes'

export const postGetLaunchConfigurationRouteHandler: RouteHandler<
  typeof postGetLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
