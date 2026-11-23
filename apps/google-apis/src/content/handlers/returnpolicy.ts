import type { RouteHandler } from '@hono/zod-openapi'
import type { postReturnpolicyBatchRoute } from '../routes'

export const postReturnpolicyBatchRouteHandler: RouteHandler<
  typeof postReturnpolicyBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
