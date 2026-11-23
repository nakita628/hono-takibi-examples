import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLaunchConfigurationRoute,
  postActionDeleteLaunchConfigurationRoute,
} from '../routes'

export const getActionDeleteLaunchConfigurationRouteHandler: RouteHandler<
  typeof getActionDeleteLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLaunchConfigurationRouteHandler: RouteHandler<
  typeof postActionDeleteLaunchConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
