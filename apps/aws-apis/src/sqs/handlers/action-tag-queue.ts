import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionTagQueueRoute } from '../routes'

export const postActionTagQueueRouteHandler: RouteHandler<typeof postActionTagQueueRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
