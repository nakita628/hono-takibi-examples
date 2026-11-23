import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteEnvironmentConfigurationRoute,
  postActionDeleteEnvironmentConfigurationRoute,
} from '../routes'

export const getActionDeleteEnvironmentConfigurationRouteHandler: RouteHandler<
  typeof getActionDeleteEnvironmentConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteEnvironmentConfigurationRouteHandler: RouteHandler<
  typeof postActionDeleteEnvironmentConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
