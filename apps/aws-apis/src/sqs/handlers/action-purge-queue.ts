import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionPurgeQueueRoute } from '../routes'

export const postActionPurgeQueueRouteHandler: RouteHandler<
  typeof postActionPurgeQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
