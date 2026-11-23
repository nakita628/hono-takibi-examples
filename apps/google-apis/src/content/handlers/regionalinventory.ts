import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegionalinventoryBatchRoute } from '../routes'

export const postRegionalinventoryBatchRouteHandler: RouteHandler<
  typeof postRegionalinventoryBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
