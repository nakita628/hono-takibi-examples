import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetQueryStateRoute } from '../routes'

export const postGetQueryStateRouteHandler: RouteHandler<typeof postGetQueryStateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
