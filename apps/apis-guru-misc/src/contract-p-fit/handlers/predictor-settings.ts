import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePredictorSettingsScopeRoute,
  getPredictorSettingsRoute,
  getPredictorSettingsScopeRoute,
  patchPredictorSettingsScopeRoute,
} from '../routes'

export const getPredictorSettingsRouteHandler: RouteHandler<
  typeof getPredictorSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePredictorSettingsScopeRouteHandler: RouteHandler<
  typeof deletePredictorSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPredictorSettingsScopeRouteHandler: RouteHandler<
  typeof getPredictorSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPredictorSettingsScopeRouteHandler: RouteHandler<
  typeof patchPredictorSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
