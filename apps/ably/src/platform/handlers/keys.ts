import type { RouteHandler } from '@hono/zod-openapi'
import type { postKeysKeyNameRequestTokenRoute } from '../routes'

export const postKeysKeyNameRequestTokenRouteHandler: RouteHandler<
  typeof postKeysKeyNameRequestTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
