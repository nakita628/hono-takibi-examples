import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1EmbeddingsRoute } from '../routes'

export const postV1EmbeddingsRouteHandler: RouteHandler<typeof postV1EmbeddingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
