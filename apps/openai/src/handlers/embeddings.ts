import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbeddingsRoute } from '../routes'

export const postEmbeddingsRouteHandler: RouteHandler<typeof postEmbeddingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
