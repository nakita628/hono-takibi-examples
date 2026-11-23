import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSamplingSettingsScopeRoute,
  getSamplingSettingsRoute,
  getSamplingSettingsScopeRoute,
  patchSamplingSettingsScopeRoute,
} from '../routes'

export const getSamplingSettingsRouteHandler: RouteHandler<
  typeof getSamplingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSamplingSettingsScopeRouteHandler: RouteHandler<
  typeof deleteSamplingSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSamplingSettingsScopeRouteHandler: RouteHandler<
  typeof getSamplingSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSamplingSettingsScopeRouteHandler: RouteHandler<
  typeof patchSamplingSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
