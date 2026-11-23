import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsRoute, getSettingsTrackingCategoriesRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsTrackingCategoriesRouteHandler: RouteHandler<
  typeof getSettingsTrackingCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
