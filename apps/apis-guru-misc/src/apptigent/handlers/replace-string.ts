import type { RouteHandler } from '@hono/zod-openapi'
import type { postReplaceStringRoute } from '../routes'

export const postReplaceStringRouteHandler: RouteHandler<typeof postReplaceStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
