import type { RouteHandler } from '@hono/zod-openapi'
import type { getBinLookupRoute } from '../routes'

export const getBinLookupRouteHandler: RouteHandler<typeof getBinLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}
