import type { RouteHandler } from '@hono/zod-openapi'
import type { postLocalinventoryBatchRoute } from '../routes'

export const postLocalinventoryBatchRouteHandler: RouteHandler<
  typeof postLocalinventoryBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
