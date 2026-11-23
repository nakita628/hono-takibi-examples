import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchGetStreamKeyRoute } from '../routes'

export const postBatchGetStreamKeyRouteHandler: RouteHandler<
  typeof postBatchGetStreamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
