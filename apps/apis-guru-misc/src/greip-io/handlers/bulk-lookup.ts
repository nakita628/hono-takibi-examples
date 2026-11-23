import type { RouteHandler } from '@hono/zod-openapi'
import type { getBulkLookupRoute } from '../routes'

export const getBulkLookupRouteHandler: RouteHandler<typeof getBulkLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}
