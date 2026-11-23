import type { RouteHandler } from '@hono/zod-openapi'
import type { postPostReviewRoute } from '../routes'

export const postPostReviewRouteHandler: RouteHandler<typeof postPostReviewRoute> = async (c) => {
  throw new Error('Not implemented')
}
