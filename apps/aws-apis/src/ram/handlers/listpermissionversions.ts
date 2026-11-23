import type { RouteHandler } from '@hono/zod-openapi'
import type { postListpermissionversionsRoute } from '../routes'

export const postListpermissionversionsRouteHandler: RouteHandler<
  typeof postListpermissionversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
