import type { RouteHandler } from '@hono/zod-openapi'
import type { postListresourcesRoute } from '../routes'

export const postListresourcesRouteHandler: RouteHandler<typeof postListresourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
