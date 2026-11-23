import type { RouteHandler } from '@hono/zod-openapi'
import type { postLateOrderQueryRoute } from '../routes'

export const postLateOrderQueryRouteHandler: RouteHandler<typeof postLateOrderQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
