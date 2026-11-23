import type { RouteHandler } from '@hono/zod-openapi'
import type { postListenPathTykBatchRoute } from '../routes'

export const postListenPathTykBatchRouteHandler: RouteHandler<
  typeof postListenPathTykBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
