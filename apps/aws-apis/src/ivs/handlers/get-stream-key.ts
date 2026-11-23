import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetStreamKeyRoute } from '../routes'

export const postGetStreamKeyRouteHandler: RouteHandler<typeof postGetStreamKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
