import type { RouteHandler } from '@hono/zod-openapi'
import type { postRandomNumberRoute } from '../routes'

export const postRandomNumberRouteHandler: RouteHandler<typeof postRandomNumberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
