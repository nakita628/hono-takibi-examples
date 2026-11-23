import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkCreateNegativeKeywordRoute } from '../routes'

export const postBulkCreateNegativeKeywordRouteHandler: RouteHandler<
  typeof postBulkCreateNegativeKeywordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
