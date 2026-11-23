import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSettingsDashboardRoute,
  getSettingsReviewRoute,
  patchSettingsDashboardRoute,
  patchSettingsReviewRoute,
} from '../routes'

export const getSettingsDashboardRouteHandler: RouteHandler<
  typeof getSettingsDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSettingsDashboardRouteHandler: RouteHandler<
  typeof patchSettingsDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsReviewRouteHandler: RouteHandler<typeof getSettingsReviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSettingsReviewRouteHandler: RouteHandler<
  typeof patchSettingsReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
