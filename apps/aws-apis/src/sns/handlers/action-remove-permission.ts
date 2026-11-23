import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRemovePermissionRoute, postActionRemovePermissionRoute } from '../routes'

export const getActionRemovePermissionRouteHandler: RouteHandler<
  typeof getActionRemovePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemovePermissionRouteHandler: RouteHandler<
  typeof postActionRemovePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
