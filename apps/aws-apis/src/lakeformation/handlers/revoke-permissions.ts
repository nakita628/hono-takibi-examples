import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevokePermissionsRoute } from '../routes'

export const postRevokePermissionsRouteHandler: RouteHandler<
  typeof postRevokePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
