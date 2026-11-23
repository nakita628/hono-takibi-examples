import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminAppsRestrictedListRoute } from '../routes'

export const getAdminAppsRestrictedListRouteHandler: RouteHandler<
  typeof getAdminAppsRestrictedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
