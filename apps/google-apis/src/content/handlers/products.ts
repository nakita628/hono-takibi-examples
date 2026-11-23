import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductsBatchRoute } from '../routes'

export const postProductsBatchRouteHandler: RouteHandler<typeof postProductsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
