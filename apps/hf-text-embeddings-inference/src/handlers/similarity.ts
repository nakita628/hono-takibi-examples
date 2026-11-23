import type { RouteHandler } from '@hono/zod-openapi'
import type { postSimilarityRoute } from '../routes'

export const postSimilarityRouteHandler: RouteHandler<typeof postSimilarityRoute> = async (c) => {
  throw new Error('Not implemented')
}
