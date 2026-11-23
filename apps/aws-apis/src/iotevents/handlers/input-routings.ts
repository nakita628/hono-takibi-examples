import type { RouteHandler } from '@hono/zod-openapi'
import type { postInputRoutingsRoute } from '../routes'

export const postInputRoutingsRouteHandler: RouteHandler<typeof postInputRoutingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
