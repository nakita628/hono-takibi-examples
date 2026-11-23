import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchRoute } from '../routes'

export const postBatchRouteHandler: RouteHandler<typeof postBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
