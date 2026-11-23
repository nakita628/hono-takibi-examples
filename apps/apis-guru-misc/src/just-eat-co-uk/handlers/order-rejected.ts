import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderRejectedRoute } from '../routes'

export const postOrderRejectedRouteHandler: RouteHandler<typeof postOrderRejectedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
