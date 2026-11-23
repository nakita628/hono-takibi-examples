import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteObjectsRoute } from '../routes'

export const postDeleteObjectsRouteHandler: RouteHandler<typeof postDeleteObjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
