import type { RouteHandler } from '@hono/zod-openapi'
import type { postUntagResourceRoute } from '../routes'

export const postUntagResourceRouteHandler: RouteHandler<typeof postUntagResourceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
