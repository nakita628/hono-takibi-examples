import type { RouteHandler } from '@hono/zod-openapi'
import type { postListpermissionsRoute } from '../routes'

export const postListpermissionsRouteHandler: RouteHandler<
  typeof postListpermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
