import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMeSettingsCategoryRoute,
  getMeRoute,
  getMeSettingsRoute,
  postMeDashboardsResetRoute,
  putMeSettingsCategoryRoute,
} from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeSettingsRouteHandler: RouteHandler<typeof getMeSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMeSettingsCategoryRouteHandler: RouteHandler<
  typeof putMeSettingsCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMeSettingsCategoryRouteHandler: RouteHandler<
  typeof deleteMeSettingsCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeDashboardsResetRouteHandler: RouteHandler<
  typeof postMeDashboardsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
