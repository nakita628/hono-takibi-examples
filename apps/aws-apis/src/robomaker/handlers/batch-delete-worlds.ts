import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchDeleteWorldsRoute } from '../routes'

export const postBatchDeleteWorldsRouteHandler: RouteHandler<
  typeof postBatchDeleteWorldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
