import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionValidateConfigurationSettingsRoute,
  postActionValidateConfigurationSettingsRoute,
} from '../routes'

export const getActionValidateConfigurationSettingsRouteHandler: RouteHandler<
  typeof getActionValidateConfigurationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionValidateConfigurationSettingsRouteHandler: RouteHandler<
  typeof postActionValidateConfigurationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
