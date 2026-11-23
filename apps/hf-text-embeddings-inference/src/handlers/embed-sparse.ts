import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbedSparseRoute } from '../routes'

export const postEmbedSparseRouteHandler: RouteHandler<typeof postEmbedSparseRoute> = async (c) => {
  throw new Error('Not implemented')
}
