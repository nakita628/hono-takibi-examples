import type { RouteHandler } from '@hono/zod-openapi'
import type { postManagerLoginRoute } from '../routes'

export const postManagerLoginRouteHandler: RouteHandler<typeof postManagerLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
