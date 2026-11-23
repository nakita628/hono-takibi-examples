import type { RouteHandler } from '@hono/zod-openapi'
import type { postBadWordFilterRoute } from '../routes'

export const postBadWordFilterRouteHandler: RouteHandler<typeof postBadWordFilterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
