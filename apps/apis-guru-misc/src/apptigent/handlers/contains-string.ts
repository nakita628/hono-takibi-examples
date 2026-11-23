import type { RouteHandler } from '@hono/zod-openapi'
import type { postContainsStringRoute } from '../routes'

export const postContainsStringRouteHandler: RouteHandler<typeof postContainsStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
