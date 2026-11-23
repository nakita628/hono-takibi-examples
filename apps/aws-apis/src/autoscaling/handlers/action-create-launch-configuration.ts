import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLaunchConfigurationRoute,
  postActionCreateLaunchConfigurationRoute,
} from '../routes'

export const getActionCreateLaunchConfigurationRouteHandler: RouteHandler<
  typeof getActionCreateLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLaunchConfigurationRouteHandler: RouteHandler<
  typeof postActionCreateLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
