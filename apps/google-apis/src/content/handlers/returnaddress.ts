import type { RouteHandler } from '@hono/zod-openapi'
import type { postReturnaddressBatchRoute } from '../routes'

export const postReturnaddressBatchRouteHandler: RouteHandler<
  typeof postReturnaddressBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
