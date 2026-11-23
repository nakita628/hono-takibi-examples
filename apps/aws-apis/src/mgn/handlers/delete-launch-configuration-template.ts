import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteLaunchConfigurationTemplateRoute } from '../routes'

export const postDeleteLaunchConfigurationTemplateRouteHandler: RouteHandler<
  typeof postDeleteLaunchConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
