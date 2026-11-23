import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsListingRoute, postSettingsBatchRequestsRoute } from '../routes'

export const postSettingsBatchRequestsRouteHandler: RouteHandler<
  typeof postSettingsBatchRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsListingRouteHandler: RouteHandler<typeof getSettingsListingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
