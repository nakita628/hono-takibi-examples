import type { RouteHandler } from '@hono/zod-openapi'
import type { postClientsBatchDeleteRoute } from '../routes'

export const postClientsBatchDeleteRouteHandler: RouteHandler<
  typeof postClientsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
