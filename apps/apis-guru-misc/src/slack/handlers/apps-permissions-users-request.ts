import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsUsersRequestRoute } from '../routes'

export const getAppsPermissionsUsersRequestRouteHandler: RouteHandler<
  typeof getAppsPermissionsUsersRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
