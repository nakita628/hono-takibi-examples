import type { RouteHandler } from '@hono/zod-openapi'
import type { postListFailedIPNsRoute } from '../routes'

export const postListFailedIPNsRouteHandler: RouteHandler<typeof postListFailedIPNsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
