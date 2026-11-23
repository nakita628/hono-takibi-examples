import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccounttaxBatchRoute } from '../routes'

export const postAccounttaxBatchRouteHandler: RouteHandler<
  typeof postAccounttaxBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
