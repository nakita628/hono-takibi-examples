import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteThresholdSettingsScopeRoute,
  getThresholdSettingsRoute,
  getThresholdSettingsScopeRoute,
  patchThresholdSettingsScopeRoute,
} from '../routes'

export const getThresholdSettingsRouteHandler: RouteHandler<
  typeof getThresholdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteThresholdSettingsScopeRouteHandler: RouteHandler<
  typeof deleteThresholdSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThresholdSettingsScopeRouteHandler: RouteHandler<
  typeof getThresholdSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchThresholdSettingsScopeRouteHandler: RouteHandler<
  typeof patchThresholdSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
