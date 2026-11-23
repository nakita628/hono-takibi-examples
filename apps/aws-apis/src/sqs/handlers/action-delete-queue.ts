import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionDeleteQueueRoute } from '../routes'

export const postActionDeleteQueueRouteHandler: RouteHandler<
  typeof postActionDeleteQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
