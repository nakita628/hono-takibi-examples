import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbeddingsImageRoute } from '../routes'

export const postEmbeddingsImageRouteHandler: RouteHandler<
  typeof postEmbeddingsImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
