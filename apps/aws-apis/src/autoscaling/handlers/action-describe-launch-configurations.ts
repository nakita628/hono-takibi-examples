import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLaunchConfigurationsRoute,
  postActionDescribeLaunchConfigurationsRoute,
} from '../routes'

export const getActionDescribeLaunchConfigurationsRouteHandler: RouteHandler<
  typeof getActionDescribeLaunchConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLaunchConfigurationsRouteHandler: RouteHandler<
  typeof postActionDescribeLaunchConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
