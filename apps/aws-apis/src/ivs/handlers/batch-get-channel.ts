import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchGetChannelRoute } from '../routes'

export const postBatchGetChannelRouteHandler: RouteHandler<
  typeof postBatchGetChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
