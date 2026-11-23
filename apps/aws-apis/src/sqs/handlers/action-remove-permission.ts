import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionRemovePermissionRoute } from '../routes'

export const postActionRemovePermissionRouteHandler: RouteHandler<
  typeof postActionRemovePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
