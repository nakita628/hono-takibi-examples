import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionListQueueTagsRoute } from '../routes'

export const postActionListQueueTagsRouteHandler: RouteHandler<
  typeof postActionListQueueTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
