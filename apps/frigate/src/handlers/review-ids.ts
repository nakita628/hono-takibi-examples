import type { RouteHandler } from '@hono/zod-openapi'
import type { getReviewIdsRoute } from '../routes'

export const getReviewIdsRouteHandler: RouteHandler<typeof getReviewIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}
