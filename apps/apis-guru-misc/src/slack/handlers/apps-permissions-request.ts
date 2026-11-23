import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsRequestRoute } from '../routes'

export const getAppsPermissionsRequestRouteHandler: RouteHandler<
  typeof getAppsPermissionsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
