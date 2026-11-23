import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderAddJsonRoute } from '../routes'

export const postOrderAddJsonRouteHandler: RouteHandler<typeof postOrderAddJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
