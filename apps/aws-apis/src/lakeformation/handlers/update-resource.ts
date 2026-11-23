import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateResourceRoute } from '../routes'

export const postUpdateResourceRouteHandler: RouteHandler<typeof postUpdateResourceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
