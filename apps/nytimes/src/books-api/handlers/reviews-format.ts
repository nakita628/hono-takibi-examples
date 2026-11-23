import type { RouteHandler } from '@hono/zod-openapi'
import type { getReviewsFormatRoute } from '../routes'

export const getReviewsFormatRouteHandler: RouteHandler<typeof getReviewsFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
