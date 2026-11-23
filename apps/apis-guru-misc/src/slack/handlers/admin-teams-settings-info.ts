import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminTeamsSettingsInfoRoute } from '../routes'

export const getAdminTeamsSettingsInfoRouteHandler: RouteHandler<
  typeof getAdminTeamsSettingsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
