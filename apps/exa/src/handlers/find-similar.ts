import type { RouteHandler } from '@hono/zod-openapi'
import type { postFindSimilarRoute } from '../routes'

export const postFindSimilarRouteHandler: RouteHandler<typeof postFindSimilarRoute> = async (c) => {
  throw new Error('Not implemented')
}
