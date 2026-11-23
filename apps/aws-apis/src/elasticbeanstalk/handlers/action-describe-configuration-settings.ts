import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeConfigurationSettingsRoute,
  postActionDescribeConfigurationSettingsRoute,
} from '../routes'

export const getActionDescribeConfigurationSettingsRouteHandler: RouteHandler<
  typeof getActionDescribeConfigurationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeConfigurationSettingsRouteHandler: RouteHandler<
  typeof postActionDescribeConfigurationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
