import type { RouteHandler } from '@hono/zod-openapi'
import type { postListChangeSetsRoute } from '../routes'

export const postListChangeSetsRouteHandler: RouteHandler<typeof postListChangeSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
