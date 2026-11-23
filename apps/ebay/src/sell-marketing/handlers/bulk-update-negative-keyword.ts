import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkUpdateNegativeKeywordRoute } from '../routes'

export const postBulkUpdateNegativeKeywordRouteHandler: RouteHandler<
  typeof postBulkUpdateNegativeKeywordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
