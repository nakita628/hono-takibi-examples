import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartCreateJsonRoute } from '../routes'

export const postCartCreateJsonRouteHandler: RouteHandler<typeof postCartCreateJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
