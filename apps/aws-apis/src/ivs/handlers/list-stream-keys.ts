import type { RouteHandler } from '@hono/zod-openapi'
import type { postListStreamKeysRoute } from '../routes'

export const postListStreamKeysRouteHandler: RouteHandler<typeof postListStreamKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
