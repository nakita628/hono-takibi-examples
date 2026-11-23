import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateLaunchConfigurationTemplateRoute } from '../routes'

export const postCreateLaunchConfigurationTemplateRouteHandler: RouteHandler<
  typeof postCreateLaunchConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
