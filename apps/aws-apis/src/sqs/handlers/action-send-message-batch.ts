import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionSendMessageBatchRoute } from '../routes'

export const postActionSendMessageBatchRouteHandler: RouteHandler<
  typeof postActionSendMessageBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
