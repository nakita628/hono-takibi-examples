import type { RouteHandler } from '@hono/zod-openapi'
import type { postMessagesBatchRoute } from '../routes'

export const postMessagesBatchRouteHandler: RouteHandler<typeof postMessagesBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
