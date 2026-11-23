import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionDeleteMessageBatchRoute } from '../routes'

export const postActionDeleteMessageBatchRouteHandler: RouteHandler<
  typeof postActionDeleteMessageBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
