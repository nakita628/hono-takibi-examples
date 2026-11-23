import type { RouteHandler } from '@hono/zod-openapi'
import type { postListPermissionsRoute } from '../routes'

export const postListPermissionsRouteHandler: RouteHandler<
  typeof postListPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
