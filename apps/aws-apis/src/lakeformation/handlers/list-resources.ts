import type { RouteHandler } from '@hono/zod-openapi'
import type { postListResourcesRoute } from '../routes'

export const postListResourcesRouteHandler: RouteHandler<typeof postListResourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
