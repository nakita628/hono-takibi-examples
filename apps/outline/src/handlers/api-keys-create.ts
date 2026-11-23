import type { RouteHandler } from '@hono/zod-openapi'
import type { postApiKeysCreateRoute } from '../routes'

export const postApiKeysCreateRouteHandler: RouteHandler<typeof postApiKeysCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
