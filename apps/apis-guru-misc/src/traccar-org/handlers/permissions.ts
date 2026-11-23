import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePermissionsRoute, postPermissionsRoute } from '../routes'

export const deletePermissionsRouteHandler: RouteHandler<typeof deletePermissionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPermissionsRouteHandler: RouteHandler<typeof postPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
