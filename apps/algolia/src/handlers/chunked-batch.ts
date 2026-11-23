import type { RouteHandler } from '@hono/zod-openapi'
import type { getChunkedBatchRoute } from '../routes'

export const getChunkedBatchRouteHandler: RouteHandler<typeof getChunkedBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
