import type { RouteHandler } from '@hono/zod-openapi'
import type { postApiKeysDeleteRoute } from '../routes'

export const postApiKeysDeleteRouteHandler: RouteHandler<typeof postApiKeysDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
