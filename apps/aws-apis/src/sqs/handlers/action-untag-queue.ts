import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionUntagQueueRoute } from '../routes'

export const postActionUntagQueueRouteHandler: RouteHandler<
  typeof postActionUntagQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
