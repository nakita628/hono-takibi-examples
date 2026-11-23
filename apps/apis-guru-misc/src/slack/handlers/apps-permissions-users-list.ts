import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsUsersListRoute } from '../routes'

export const getAppsPermissionsUsersListRouteHandler: RouteHandler<
  typeof getAppsPermissionsUsersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
