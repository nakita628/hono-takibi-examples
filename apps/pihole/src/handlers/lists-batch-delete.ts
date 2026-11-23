import type { RouteHandler } from '@hono/zod-openapi'
import type { postListsBatchDeleteRoute } from '../routes'

export const postListsBatchDeleteRouteHandler: RouteHandler<
  typeof postListsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
