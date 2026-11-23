import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePermissionAppsAppIdRoute,
  getPermissionAppsAppIdRoute,
  postPermissionAppsAppIdRoute,
} from '../routes'

export const deletePermissionAppsAppIdRouteHandler: RouteHandler<
  typeof deletePermissionAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPermissionAppsAppIdRouteHandler: RouteHandler<
  typeof getPermissionAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPermissionAppsAppIdRouteHandler: RouteHandler<
  typeof postPermissionAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
