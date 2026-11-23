import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminAppsApprovedListRoute } from '../routes'

export const getAdminAppsApprovedListRouteHandler: RouteHandler<
  typeof getAdminAppsApprovedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
