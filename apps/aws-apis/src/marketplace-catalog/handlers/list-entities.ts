import type { RouteHandler } from '@hono/zod-openapi'
import type { postListEntitiesRoute } from '../routes'

export const postListEntitiesRouteHandler: RouteHandler<typeof postListEntitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
