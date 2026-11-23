import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsBatchDeleteRoute } from '../routes'

export const postGroupsBatchDeleteRouteHandler: RouteHandler<
  typeof postGroupsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
